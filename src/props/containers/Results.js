import PropTypes from 'prop-types'
import { resultDefaults, resultProps } from 'props/components/Results/resultCard'

const questionProps = PropTypes.shape({
  category: PropTypes.string,
  correctAnswer: PropTypes.bool,
  difficulty: PropTypes.string,
  question: PropTypes.string
})

const questionDefaults = {
  category: '',
  correctAnswer: false,
  difficulty: '',
  question: ''
}

export const ResultsContainerProps = PropTypes.shape({
  answers: PropTypes.arrayOf(resultProps),
  isRequired: PropTypes.object,
  level: PropTypes.string,
  questions: PropTypes.arrayOf(questionProps),
  resetAnswer: PropTypes.func,
  resetQuestions: PropTypes.func,
  resetLevel: PropTypes.func,
  setInitialQuestion: PropTypes.func
})

export const ResultsContainerDefaults = {
  answers: [resultDefaults],
  isRequired: {},
  level: '',
  questions: [questionDefaults],
  resetAnswer: () => {},
  resetQuestions: () => {},
  resetLevel: () => {},
  setInitialQuestion: () => {}
}

export {
  resultDefaults,
  resultProps
}
