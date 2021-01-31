import ButtonWithLoading from 'components/common/ButtonWithLoading'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ButtonWithLoadingDefaults } from 'props/components/common/ButtonWithLoading'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('Button component', () => {
  it('The button should be disabled when is loading', () => {
    const component = create(<ButtonWithLoading {...ButtonWithLoadingDefaults} loading={true} />)
    const instance = component.root
    const button = instance.findByType('button')
    expect(button.props.disabled).toBe(true)
  })
  it('The button should be enabled when is not loading', () => {
    const component = create(<ButtonWithLoading {...ButtonWithLoadingDefaults} loading={false} />)
    const instance = component.root
    const button = instance.findByType('button')
    expect(button.props.disabled).toBe(false)
  })
})
