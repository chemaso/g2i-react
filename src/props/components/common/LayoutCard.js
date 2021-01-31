import PropTypes from 'prop-types'

export const LayoutCardProps = PropTypes.shape({
  isRequired: PropTypes.object,
  render: PropTypes.func
})

export const LayoutCardDefaults = {
  isRequired: {},
  render: () => {}
}
