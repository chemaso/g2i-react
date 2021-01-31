import HomeLayout from 'components/Home/layout'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { HomeLayoutDefaults } from 'props/components/Home/layout'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('HomeLayout component', () => {
  it('The HomeLayout Begin button should handle correct props', () => {
    const component = create(<HomeLayout {...HomeLayoutDefaults} />)
    const instance = component.root
    const beginButton = instance.findByType('div').props.children[6].props.children.props
    beginButton.onClick()
    expect(beginButton.loading).toBe(false)
    expect(beginButton.children).toBe('Begin')
  })
  it('The HomeLayout should pass properly the level options to inputSelect', () => {
    const options = ['test', 'case']
    const component = create(<HomeLayout {...HomeLayoutDefaults} options={options} />)
    const instance = component.root
    const beginButton = instance.findByType('div').props.children[5].props
    expect(beginButton.children.props.options.length).toBe(2)
  })
})
