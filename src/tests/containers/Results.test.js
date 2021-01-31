import ResultsContainer from 'containers/Results'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ResultsContainerDefaults } from 'props/containers/Results'
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
    ...ResultsContainerDefaults
  }

  const store = mockStore(testProps)
  const component = create(
    <Provider store={store}>
      <Router>
        <ResultsContainer {...ResultsContainerDefaults} />
      </Router>
    </Provider>
  )

  it('The ResultsContainer should show a Layout with the render prop execution', () => {
    const instance = component.root
    const ResultContainer = instance.findByType('div').props.children.props.render().props
    expect(ResultContainer.answers.length).toBe(0)
    expect(ResultContainer.level).toBe('Hard')
  })
  it('The ResultsContainer restart button should be called', () => {
    const instance = component.root
    const QuestionContainerInstance = instance.findByType('div').props.children.props.render().props
    const instances = Object.assign({}, QuestionContainerInstance)
    const spyOnStart = jest.spyOn(instances, 'onSelect')
    act(() => instances.onSelect())
    expect(spyOnStart).toHaveBeenCalled()
  })
})
