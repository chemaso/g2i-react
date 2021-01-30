import React from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  ButtonWithLoadingProps,
  ButtonWithLoadingDefaults
} from 'props/components/common/ButtonWithLoading'

import { useButtonWithLoadingStyles } from './styles'

const ButtonWithLoading = ({ children, icon, loading, onStart, position, ...rest }) => {
  const classes = useButtonWithLoadingStyles()
  let display = children
  let others = {
    ...rest,
    [position]: icon
  }
  if (loading) {
    display = <CircularProgress classes={{ root: classes.spinner }} size={25} />
    others = {
      ...rest
    }
  }
  return (
    <Button
      disabled={loading}
      classes={{ root: classes.root }}
      onClick={onStart}
      className={classes.button}
      {...others}
    >
      {display}
    </Button>
  )
}

ButtonWithLoading.propTypes = ButtonWithLoadingProps
ButtonWithLoading.defaultProps = ButtonWithLoadingDefaults

export default ButtonWithLoading
