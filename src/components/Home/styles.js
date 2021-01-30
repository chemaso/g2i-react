import { makeStyles } from '@material-ui/core/styles'

export const useHomeLayoutStyles = makeStyles((theme) => ({
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
  select: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  button: theme.awesomeButton,
  divider: theme.divider
}))
