import PropTypes from 'prop-types'

export const ButtonWithLoadingProps = PropTypes.shape({
  children: PropTypes.element,
  icon: PropTypes.element,
  loading: PropTypes.bool,
  position: PropTypes.string,
  onStart: PropTypes.func,
  rest: PropTypes.object
})

export const ButtonWithLoadingDefaults = {
  children: <div />,
  icon: <div />,
  loading: false,
  position: 'endIcon',
  onStart: () => {},
  rest: {}
}
