import React, { useState, useEffect, useCallback } from 'react'

import Grid from '@material-ui/core/Grid'
import { setAnswers } from 'actions/answers'
import { setLevel } from 'actions/level'
import { getQuestions, setQuestion, setCurrentQuestion } from 'actions/question'
import LayoutCard from 'components/common/LayoutCard'
import HomeLayout from 'components/Home/layout'
import get from 'lodash/get'
import { HomeContainerDefaults, HomeContainerProps } from 'props/containers/Home'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { INITIAL_LEVEL, LEVEL_OPTIONS, RESULTS_AMOUNT, QUESTIONS_TYPE } from 'resources/constants'

import { useContainerStyle } from './styles'

// Home container connected with redux store
const Home = ({
  fetchQuestions,
  setLevelSelected,
  level,
  questions,
  resetAnswers,
  resetCurrentQuestion,
  resetQuestion
}) => {
  const [loading, setLoading] = useState(false)
  const classes = useContainerStyle()
  const { push } = useHistory()
  const ZERO = 0

  // resets the questions if the object is not empty
  useEffect(() => {
    if (questions.length > ZERO) {
      resetCurrentQuestion(ZERO)
      resetQuestion()
      resetAnswers([])
    }
  }, [])

  // sets the difficulty of the questions
  const handleSelectLevel = useCallback((value) => setLevelSelected(value), [])

  // handles begin button invokes a redux action
  const handleStart = useCallback(async () => {
    setLoading(true)
    const params = {
      amount: RESULTS_AMOUNT,
      difficulty: level,
      type: QUESTIONS_TYPE
    }
    try {
      await fetchQuestions(params)
      setLoading(false)
      push('/questions')
    } catch (e) {
      setLoading(false)
    }
  }, [level])

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <LayoutCard
        render={() => (
          <HomeLayout
            initialLevel={INITIAL_LEVEL}
            loading={loading}
            onChange={handleSelectLevel}
            onStart={handleStart}
            options={LEVEL_OPTIONS}
          />
        )}
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  level: get(state, 'level.selected', INITIAL_LEVEL),
  questions: get(state, 'question.list', [])
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchQuestions: getQuestions,
      resetAnswers: setAnswers,
      resetCurrentQuestion: setCurrentQuestion,
      resetQuestion: setQuestion,
      setLevelSelected: setLevel
    },
    dispatch
  )
}

Home.propTypes = HomeContainerProps
Home.defaultProps = HomeContainerDefaults

export default connect(mapStateToProps, mapDispatchToProps)(Home)
