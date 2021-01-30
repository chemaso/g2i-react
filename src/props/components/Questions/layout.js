import PropTypes from 'prop-types'

export const QuestionLayoutProps = PropTypes.shape({
  category: PropTypes.string,
  current: PropTypes.number,
  difficulty: PropTypes.string,
  onSelect: PropTypes.func,
  question: PropTypes.string,
  total: PropTypes.number
})

export const QuestionLayoutDefaults = {
  category: '',
  current: 1,
  difficulty: '',
  onSelect: () => {},
  question: '',
  total: 1
}
