import { makeStyles } from '@material-ui/core/styles'

// styles for ButtonWithLoading
export const useButtonWithLoadingStyles = makeStyles((theme) => ({
  button: theme.awesomeButton,
  spinner: {
    color: '#ffffffde'
  },
  root: {
    minWidth: '120px'
  }
}))

// styles for InputSelect
export const useInputSelectStyles = makeStyles(() => ({
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

// styles for LayoutCard
export const useLayoutCardStyles = makeStyles(({ layout }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${layout.xl}vh`,
    width: `${layout.xl}vw`
  }
}))
