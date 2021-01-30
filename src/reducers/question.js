import { SET_QUESTIONS } from '../actionTypes/question'

const initialState = {
  list: []
}

const question = (state = initialState, { type, list }) => {
  switch (type) {
    case SET_QUESTIONS:
      return {
        ...initialState,
        list
      }
    default:
      return state
  }
}

export default question
