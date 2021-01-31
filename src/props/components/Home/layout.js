import PropTypes from 'prop-types'

export const HomeLayoutProps = PropTypes.shape({
  initialLevel: PropTypes.string,
  isRequired: PropTypes.object,
  loading: PropTypes.bool,
  onStart: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array
})

export const HomeLayoutDefaults = {
  initial: '',
  isRequired: {},
  loading: false,
  onStart: () => {},
  onChange: () => {},
  options: []
}
