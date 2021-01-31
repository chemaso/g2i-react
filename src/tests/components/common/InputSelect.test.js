import InputSelect from 'components/common/InputSelect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { InputSelectDefaults } from 'props/components/common/InputSelect'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('InputSelect component', () => {
  const options = ['test', 'case']
  it('The Papper render the list options', () => {
    const component = create(<InputSelect {...InputSelectDefaults} options={options} />)
    const instance = component.root
    const papper = instance.findByType('div')
    expect(papper.props.children.length).toBe(options.length)
  })
})
