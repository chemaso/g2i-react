import * as actions from 'actions/answers'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ResultsContainerDefaults, resultDefaults } from 'props/containers/Results'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

configure({ adapter: new Adapter() })

jest.unmock('actions/answers.js')

axios.defaults.adapter = httpAdapter

describe('answers actions', () => {
  const middleware = [thunk]
  const mockStore = configureMockStore(middleware)
  const testProps = {
    ...ResultsContainerDefaults
  }

  const store = mockStore(testProps)

  let action

  beforeAll(() => {
    return store.dispatch(actions.setAnswer(resultDefaults))
  })

  it('should trigget SET_ANSWER action', () => {
    action = store.getActions().shift()
    expect(action.type).toEqual('SET_ANSWER')
  })
})
