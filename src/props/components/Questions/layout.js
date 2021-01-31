import PropTypes from 'prop-types'

export const QuestionLayoutProps = PropTypes.shape({
  category: PropTypes.string,
  current: PropTypes.number,
  difficulty: PropTypes.string,
  isRequired: PropTypes.object,
  onSelect: PropTypes.func,
  question: PropTypes.string,
  total: PropTypes.number
})

export const QuestionLayoutDefaults = {
  category: '',
  current: 1,
  difficulty: '',
  isRequired: {},
  onSelect: () => {},
  question: '',
  total: 1
}
