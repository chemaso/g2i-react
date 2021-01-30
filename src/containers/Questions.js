import React from 'react'

import Grid from '@material-ui/core/Grid'
import { setAnswer } from 'actions/answers'
import { setCurrentQuestion } from 'actions/question'
import LayoutCard from 'components/common/LayoutCard'
import QuestionsLayout from 'components/Questions/layout'
import get from 'lodash/get'
import { QuestionsContainerProps, QuestionsContainerDefaults } from 'props/containers/Questions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { INITIAL_QUESTION, INITIAL_LEVEL } from '../constants'
import { useContainerStyle } from './styles'

const Questions = ({ currentQuestion, level, questions, setCurrentAnswer, setQuestion }) => {
  const classes = useContainerStyle()
  const { category, correctAnswer, difficulty, question } = questions[currentQuestion]
  const { push } = useHistory()
  const current = currentQuestion + 1

  const handleAnswer = (value) => {
    const payload = {
      answer: value,
      correctAnswer,
      question: question
    }
    if (current < questions.length) {
      setCurrentAnswer(payload)
      setQuestion(current)
    } else {
      setCurrentAnswer(payload)
      push('/results')
    }
  }

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <LayoutCard
        render={() => (
          <QuestionsLayout
            onSelect={handleAnswer}
            current={current}
            level={level}
            difficulty={difficulty}
            total={questions.length}
            question={question}
            category={category}
          />
        )}
      />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  currentQuestion: get(state, 'question.current', INITIAL_QUESTION),
  questions: get(state, 'question.list', []),
  level: get(state, 'level.selected', INITIAL_LEVEL)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setCurrentAnswer: setAnswer,
      setQuestion: setCurrentQuestion
    },
    dispatch
  )
}

Questions.propTypes = QuestionsContainerProps
Questions.defaultProps = QuestionsContainerDefaults

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
