import PropTypes from 'prop-types'

export const ResultsLayoutProps = PropTypes.shape({
  answers: PropTypes.array,
  corrects: PropTypes.number,
  level: PropTypes.string,
  onSelect: PropTypes.func,
  total: PropTypes.number
})

export const ResultsLayoutDefaults = {
  answers: [],
  corrects: 0,
  level: '',
  onSelect: () => {},
  total: 0
}
