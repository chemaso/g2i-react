import { SET_ANSWER, SET_ANSWERS } from '../actionTypes/answers'

export const initialState = {
  list: []
}

const answer = (state = initialState, { type, answer }) => {
  switch (type) {
    case SET_ANSWER:
      return {
        ...state,
        list: [...state.list, answer]
      }
    case SET_ANSWERS:
      return {
        ...state,
        list: answer
      }
    default:
      return state
  }
}

export default answer
