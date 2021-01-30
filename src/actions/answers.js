import { SET_ANSWER, SET_ANSWERS } from 'actionTypes/answers'

// setAnswer push the current answer to the answers accumulator
export const setAnswer = (answer) => {
  return async (dispatch) => {
    const action = {
      type: SET_ANSWER,
      answer
    }
    dispatch(action)
  }
}

// setAnswer is usefull to reset the answers array
export const setAnswers = (answer) => {
  return async (dispatch) => {
    const action = {
      type: SET_ANSWERS,
      answer
    }
    dispatch(action)
  }
}
