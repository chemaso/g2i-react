import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import LayoutCard from 'components/common/LayoutCard'
import HomeLayout from 'components/Home/layout'
import get from 'lodash/get'
import { INITIAL_LEVEL, LEVEL_OPTIONS, RESULTS_AMOUNT, QUESTIONS_TYPE } from '../constants'
import { getQuestions } from 'actions/question'
import { setLevel } from 'actions/level'

const useStyles = makeStyles((theme) => ({
  root: theme.fullHeight
}))

const Home = ({ fetchQuestions, setLevelSelected, level }) => {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const { push } = useHistory()

  const handleSelectLevel = (value) => setLevelSelected(value)

  const handleStart = async () => {
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
      console.log(e)
    }
  }
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
  level: get(state, 'level.selected', INITIAL_LEVEL)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchQuestions: getQuestions,
      setLevelSelected: setLevel
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
