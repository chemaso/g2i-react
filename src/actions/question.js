import { SET_QUESTIONS, SET_CURRENT_QUESTIONS } from 'actionTypes/question'
import { getQuestions as fetchQuestions } from 'api/questions'
import ReactHtmlParser from 'react-html-parser'
import { setCapitalize } from 'utils'

const answerType = {
  True: true,
  False: false
}

// getQuestions fetch the questions list from API
export const getQuestions = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await fetchQuestions(params)
      const results = data?.results?.map(item => {
        return {
          ...item,
          // capitalize the difficulty to display it in the UI
          difficulty: setCapitalize(item.difficulty),
          // Parse the question string to avoid strange characters
          question: ReactHtmlParser(item.question)[0],
          // Parse the correct answer to show it as a boolean
          correctAnswer: answerType[item.correct_answer]

        }
      })
      const action = {
        type: SET_QUESTIONS,
        list: results
      }
      dispatch(action)
    } catch (e) {
      // TODO: create an error notification system
      console.log(e)
    }
  }
}

// setCurrentQuestion updates the current question int
export const setCurrentQuestion = (current) => {
  return async (dispatch) => {
    const action = {
      type: SET_CURRENT_QUESTIONS,
      current
    }
    dispatch(action)
  }
}

// setQuestion is useful to reset the state of question list
export const setQuestion = () => {
  return async (dispatch) => {
    const action = {
      type: SET_QUESTIONS,
      list: []
    }
    dispatch(action)
  }
}
