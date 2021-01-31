import QuestionsContainer from 'containers/Questions'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { QuestionsContainerDefaults } from 'props/containers/Questions'
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
    ...QuestionsContainerDefaults
  }

  const store = mockStore(testProps)
  const component = create(
    <Provider store={store}>
      <Router>
        <QuestionsContainer {...QuestionsContainerDefaults} />
      </Router>
    </Provider>
  )

  it('The QuestionsContainer should show a Layout with the render prop execution', () => {
    const instance = component.root
    const QuestionContainer = instance.findByType('div').props.children.props.render().props
    expect(QuestionContainer.current).toBe(1)
    expect(QuestionContainer.question).toBe('')
    expect(QuestionContainer.category).toBe('')
  })
  it('The QuestionsContainer begin button should be called', () => {
    const instance = component.root
    const QuestionContainerInstance = instance.findByType('div').props.children.props.render().props
    const instances = Object.assign({}, QuestionContainerInstance)
    const spyOnStart = jest.spyOn(instances, 'onSelect')
    act(() => instances.onSelect())
    expect(spyOnStart).toHaveBeenCalled()
  })
})
