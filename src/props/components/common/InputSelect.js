import PropTypes from 'prop-types'

export const InputSelectProps = PropTypes.shape({
  initial: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array
})

export const InputSelectDefaults = {
  initial: '',
  loading: false,
  onChange: () => {},
  options: []
}
