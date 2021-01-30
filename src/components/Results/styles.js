import { makeStyles } from '@material-ui/core/styles'

export const useResultsLayoutStyles = makeStyles((theme) => ({
  title: {
    ...theme.awesomeTitle,
    textAlign: 'center'
  },
  content: {
    textAlign: 'center'
  },
  level: {
    ...theme.awesomeTitle,
    textAlign: 'center'
  },
  question: {
    padding: 20
  },
  results: {
    maxHeight: '50vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  button: theme.awesomeButton,
  divider: theme.divider
}))

export const useResultCardStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '8px 2px',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))
