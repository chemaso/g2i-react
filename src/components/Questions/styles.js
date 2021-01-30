import { makeStyles } from '@material-ui/core/styles'

export const useQuestionsLayoutStyles = makeStyles((theme) => ({
  title: {
    ...theme.awesomeTitle,
    textAlign: 'center'
  },
  content: {
    textAlign: 'center'
  },
  button: {
    fontWeight: '900',
    minWidth: '30vw'
  },
  question: {
    padding: 20
  },
  divider: theme.divider
}))
