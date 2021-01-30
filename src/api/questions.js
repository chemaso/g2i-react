import g2iInstance from 'api'

const BASE_API = '/api.php'

export const getQuestions = (params) => g2iInstance.get(BASE_API, { params })
