import PropTypes from 'prop-types'

export const HomeContainerProps = PropTypes.shape({
  fetchQuestions: PropTypes.func,
  isRequired: PropTypes.object,
  level: PropTypes.string,
  resetAnswers: PropTypes.func,
  resetCurrentQuestion: PropTypes.func,
  resetQuestion: PropTypes.func,
  setLevelSelected: PropTypes.func
})

export const HomeContainerDefaults = {
  fetchQuestions: () => {},
  isRequired: {},
  level: '',
  resetAnswers: () => {},
  resetCurrentQuestion: () => {},
  resetQuestion: () => {},
  setLevelSelected: () => {}
}
