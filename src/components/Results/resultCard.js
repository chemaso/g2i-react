import React from 'react'

import MuiAlert from '@material-ui/lab/Alert'
import { ResultCardDefaults, ResultCardProps } from 'props/components/Results/resultCard'

import { useResultCardStyles } from './styles'

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const ResultCard = ({ result }) => {
  const classes = useResultCardStyles()
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
