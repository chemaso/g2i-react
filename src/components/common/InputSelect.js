import React, { useState, useEffect } from 'react'

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
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { InputSelectProps, InputSelectDefaults } from 'props/components/common/InputSelect'
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

const InputSelect = ({ initial, loading, options, onChange }) => {
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
  const openIfNotLoading = !loading ? handleClick : () => {}
  const selectedValue = setCapitalize(selected)
  return (
    <>
      <Paper onClick={openIfNotLoading} component="div" className={classes.root}>
        <Typography className={classes.select}>{selectedValue}</Typography>
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
            <ListItem
              key={index}
              value={item}
              selected={item === selected}
              button
              onClick={() => handlePopover(item)}
            >
              {renderIcon(item)}
              <ListItemText primary={setCapitalize(item)} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  )
}

InputSelect.propTypes = InputSelectProps
InputSelect.defaultProps = InputSelectDefaults

export default InputSelect
