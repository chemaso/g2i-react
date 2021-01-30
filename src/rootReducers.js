import { combineReducers } from 'redux'

import question from 'reducers/question'
import level from 'reducers/level'

export default combineReducers({
  question,
  level
})
