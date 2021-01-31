import { SET_LEVEL } from 'actionTypes/level'
import { INITIAL_LEVEL } from 'resources/constants'

export const initialState = {
  selected: INITIAL_LEVEL
}

const level = (state = initialState, { type, selected }) => {
  switch (type) {
    case SET_LEVEL:
      return {
        ...state,
        selected
      }
    default:
      return state
  }
}

export default level
