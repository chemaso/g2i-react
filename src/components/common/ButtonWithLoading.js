import React from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import {
  ButtonWithLoadingProps,
  ButtonWithLoadingDefaults
} from 'props/components/common/ButtonWithLoading'

const useStyles = makeStyles((theme) => ({
  button: theme.awesomeButton,
  spinner: {
    color: '#ffffffde'
  },
  root: {
    minWidth: '120px'
  }
}))

const ButtonWithLoading = ({ children, icon, loading, onStart, position, ...rest }) => {
  const classes = useStyles()
  let display = children

  // add remaining props with icon
  let others = {
    ...rest,
    [position]: icon
  }

  // show a loading spinner in the button when this is loading
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
