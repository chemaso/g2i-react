import PropTypes from 'prop-types'

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

export const QuestionsContainerProps = PropTypes.shape({
  setQuestion: PropTypes.func,
  level: PropTypes.string,
  currentQuestion: PropTypes.number,
  questions: PropTypes.arrayOf(questionProps),
  setCurrentAnswer: PropTypes.func
})

export const QuestionsContainerDefaults = {
  setQuestion: () => {},
  level: '',
  currentQuestion: 0,
  questions: [questionDefaults],
  setCurrentAnswer: () => {}
}
