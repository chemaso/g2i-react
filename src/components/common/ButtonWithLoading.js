import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: theme.awesomeButton,
  spinner: {
    color: '#ffffffde'
  },
  root: {
    minWidth: '120px'
  }
}))

const ButtonWithLoading = ({ children, icon, loading, onStart, ...rest }) => {
  const classes = useStyles()
  let display = children
  let others = {
    ...rest,
    endIcon: icon
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

export default ButtonWithLoading
