import answer from 'reducers/answer'
import level from 'reducers/level'
import question from 'reducers/question'
import { combineReducers } from 'redux'

export default combineReducers({
  answer,
  level,
  question
})
