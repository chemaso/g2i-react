import { SET_LEVEL } from 'actionTypes/level'

// setLevel saves the level in store
export const setLevel = (value) => {
  return async (dispatch) => {
    const action = {
      type: SET_LEVEL,
      selected: value
    }
    dispatch(action)
  }
}
