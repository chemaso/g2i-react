import PropTypes from 'prop-types'

export const InputSelectProps = PropTypes.shape({
  initial: PropTypes.string,
  isRequired: PropTypes.object,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array
})

export const InputSelectDefaults = {
  initial: '',
  isRequired: {},
  loading: false,
  onChange: () => {},
  options: []
}
