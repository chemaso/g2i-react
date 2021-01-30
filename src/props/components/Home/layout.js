import PropTypes from 'prop-types'

export const HomeLayoutProps = PropTypes.shape({
  initialLevel: PropTypes.string,
  loading: PropTypes.bool,
  onStart: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array
})

export const HomeLayoutDefaults = {
  initial: '',
  loading: false,
  onStart: () => {},
  onChange: () => {},
  options: []
}
