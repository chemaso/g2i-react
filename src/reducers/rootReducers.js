import answer from 'reducers/answer'
import level from 'reducers/level'
import question from 'reducers/question'
import { combineReducers } from 'redux'

// collects the reducers and combine them to pass the object to create store
export default combineReducers({
  answer,
  level,
  question
})
