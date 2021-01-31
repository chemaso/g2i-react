import React from 'react'

import Grid from '@material-ui/core/Grid'
import { setAnswers } from 'actions/answers'
import { setLevel } from 'actions/level'
import { setCurrentQuestion, setQuestion } from 'actions/question'
import LayoutCard from 'components/common/LayoutCard'
import ResultsLayout from 'components/Results/layout'
import get from 'lodash/get'
import { ResultsContainerProps, ResultsContainerDefaults } from 'props/containers/Results'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { INITIAL_LEVEL, INITIAL_QUESTION } from 'resources/constants'
import { setCapitalize } from 'resources/utils'

import { useContainerStyle } from './styles'

const Results = ({
  answers,
  level,
  questions,
  resetAnswer,
  resetQuestions,
  resetLevel,
  setInitialQuestion
}) => {
  const classes = useContainerStyle()
  const { push } = useHistory()
  const handleRestart = async () => {
    await setInitialQuestion(INITIAL_QUESTION)
    await resetLevel(INITIAL_LEVEL)
    await resetAnswer([])
    await resetQuestions([])
    push('/')
  }

  const difficulty = setCapitalize(level)
  const correctAnswers = answers.filter((item) => item.answer === item.correctAnswer)

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <LayoutCard
        render={() => (
          <ResultsLayout
            corrects={correctAnswers.length}
            answers={answers}
            onSelect={handleRestart}
            level={difficulty}
            total={questions.length}
          />
        )}
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  answers: get(state, 'answer.list', []),
  questions: get(state, 'question.list', []),
  level: get(state, 'level.selected', INITIAL_LEVEL)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetAnswer: setAnswers,
      resetQuestions: setQuestion,
      resetLevel: setLevel,
      setInitialQuestion: setCurrentQuestion
    },
    dispatch
  )
}

Results.propTypes = ResultsContainerProps
Results.defaultProps = ResultsContainerDefaults

export default connect(mapStateToProps, mapDispatchToProps)(Results)
