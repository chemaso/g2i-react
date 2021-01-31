import HomeContainer from 'containers/Home'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { HomeContainerDefaults } from 'props/containers/Home'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { create, act } from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

configure({ adapter: new Adapter() })

describe('HomeLayout component', () => {
  const middleware = [thunk]
  const mockStore = configureMockStore(middleware)
  const testProps = {
    ...HomeContainerDefaults
  }

  const store = mockStore(testProps)
  const component = create(
    <Provider store={store}>
      <Router>
        <HomeContainer {...HomeContainerDefaults} />
      </Router>
    </Provider>
  )

  it('The HomeContainer should show a Layout with the render prop execution', () => {
    const instance = component.root
    const HomeContainer = instance.findByType('div').props.children.props.render().props
    expect(HomeContainer.initialLevel).toBe('hard')
    expect(HomeContainer.options.length).toBe(3)
  })
  it('The HomeContainer begin button should be called', () => {
    const instance = component.root
    const HomeContainerInstance = instance.findByType('div').props.children.props.render().props
    const instances = Object.assign({}, HomeContainerInstance)
    const spyOnStart = jest.spyOn(instances, 'onStart')
    act(() => instances.onStart())
    expect(spyOnStart).toHaveBeenCalled()
  })
})
