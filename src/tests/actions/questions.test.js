import * as actions from 'actions/question'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { QuestionsContainerDefaults } from 'props/containers/Questions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

configure({ adapter: new Adapter() })

jest.unmock('actions/question.js')

axios.defaults.adapter = httpAdapter

describe('question actions', () => {
  const params = {
    amount: 10,
    difficulty: 'hard',
    type: 'bool'
  }
  const middleware = [thunk]
  const mockStore = configureMockStore(middleware)
  const testProps = {
    ...QuestionsContainerDefaults
  }

  const store = mockStore(testProps)

  let action

  beforeAll(() => {
    return store.dispatch(actions.getQuestions(params))
  })

  it('should trigget SET_QUESTIONS action', () => {
    action = store.getActions().shift()
    expect(action.type).toEqual('SET_QUESTIONS')
  })
})
