import React, { memo } from 'react'

import MuiAlert from '@material-ui/lab/Alert'
import { ResultCardDefaults, ResultCardProps } from 'props/components/Results/resultCard'
import { SUCCESS, ERROR } from 'resources/constants'

import { useResultCardStyles } from './styles'

// Alert render the alert MU component
function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

// Render a result card with success or error icon and style
const ResultCard = ({ result }) => {
  const classes = useResultCardStyles()
  const { question, correctAnswer, answer } = result
  const severity = {
    true: SUCCESS,
    false: ERROR
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

export default memo(ResultCard)
