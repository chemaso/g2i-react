import g2iInstance from 'api'

const BASE_API = '/api.php'

// getQuestions trigger a get API call to bring the questions list
export const getQuestions = (params) => g2iInstance.get(BASE_API, { params })
