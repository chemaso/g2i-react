import PropTypes from 'prop-types'

export const resultProps = PropTypes.shape({
  answer: PropTypes.bool,
  correctAnswer: PropTypes.bool,
  question: PropTypes.string
})

export const resultDefaults = {
  answer: false,
  correctAnswer: false,
  question: ''
}

export const ResultCardProps = PropTypes.shape({
  isRequired: PropTypes.object,
  result: resultProps
})

export const ResultCardDefaults = {
  isRequired: {},
  result: resultDefaults
}
