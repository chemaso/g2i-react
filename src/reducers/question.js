import { SET_QUESTIONS, SET_CURRENT_QUESTIONS } from 'actionTypes/question'
import { INITIAL_QUESTION } from 'resources/constants'

const initialState = {
  list: [],
  current: INITIAL_QUESTION
}

const question = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        list: action.list
      }
    case SET_CURRENT_QUESTIONS:
      return {
        ...state,
        current: action.current
      }
    default:
      return state
  }
}

export default question
