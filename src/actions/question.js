import { getQuestions as fetchQuestions } from 'api/questions'
import { SET_QUESTIONS } from 'actionTypes/question'

export const getQuestions = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await fetchQuestions(params)
      const action = {
        type: SET_QUESTIONS,
        list: data?.results
      }
      dispatch(action)
    } catch (e) {
      // TODO: create an error notification system
      console.log(e)
    }
  }
}
