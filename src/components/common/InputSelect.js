import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  Typography,
  Popover,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import { setCapitalize } from 'utils'

const useStyles = makeStyles(() => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    background: '#e8e8e8',
    width: '80%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  iconButton: {
    padding: 10
  },
  select: {
    paddingLeft: 10,
    width: '95%'
  },
  popover: {
    minWidth: '35vw'
  }
}))

const InputSelect = ({ options, onChange, initial }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSelected(initial)
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handlePopover = (item) => {
    setSelected(item)
    onChange(item)
    handleClose()
  }

  const renderIcon = (value) => {
    if (value === selected) {
      return (
        <ListItemIcon>
          <RadioButtonCheckedIcon />
        </ListItemIcon>
      )
    }
    return (
      <ListItemIcon>
        <RadioButtonUncheckedIcon />
      </ListItemIcon>
    )
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Paper onClick={handleClick} component="div" className={classes.root}>
        <Typography className={classes.select}>{setCapitalize(selected)}</Typography>
        <IconButton className={classes.iconButton} aria-label="select">
          <ExpandMoreIcon />
        </IconButton>
      </Paper>
      <Popover
        id={id}
        classes={{ paper: classes.popover }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <List component="nav">
          {options.map((item, index) => (
            <ListItem key={index} value={item} selected={item === selected} button onClick={() => handlePopover(item)}>
              {renderIcon(item)}
              <ListItemText primary={setCapitalize(item)} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  )
}

export default InputSelect
