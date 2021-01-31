import PropTypes from 'prop-types'

export const ResultsLayoutProps = PropTypes.shape({
  answers: PropTypes.array,
  corrects: PropTypes.number,
  isRequired: PropTypes.object,
  level: PropTypes.string,
  onSelect: PropTypes.func,
  total: PropTypes.number
})

export const ResultsLayoutDefaults = {
  answers: [],
  corrects: 0,
  isRequired: {},
  level: '',
  onSelect: () => {},
  total: 0
}
