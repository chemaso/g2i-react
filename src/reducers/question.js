import { SET_QUESTIONS } from '../actionTypes/question'

const initialState = {
  questions: {}
}
const question = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...initialState,
        questions: action.questions
      }
    default:
      return state
  }
}

export default question
