import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'
import { ResultCardDefaults, ResultCardProps } from 'props/components/Results/resultCard'

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '8px 2px',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const ResultCard = ({ result }) => {
  const classes = useStyles()
  const { question, correctAnswer, answer } = result
  const severity = {
    true: 'success',
    false: 'error'
  }
  const isCorrect = correctAnswer === answer
  return (
    <div className={classes.root}>
      <Alert severity={severity[isCorrect]}>{question}</Alert>
    </div>
  )
}

ResultCard.propTypes = ResultCardProps
ResultCard.defaultProps = ResultCardDefaults

export default ResultCard
