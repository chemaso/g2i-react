import { SET_LEVEL } from 'actionTypes/level'

export const setLevel = (value) => {
  return async (dispatch) => {
    const action = {
      type: SET_LEVEL,
      selected: value
    }
    dispatch(action)
  }
}
