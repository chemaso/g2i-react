import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import LayoutCard from 'components/common/LayoutCard'
import HomeLayout from 'components/Home/layout'
import { INITIAL_LEVEL, LEVEL_OPTIONS } from '../constants'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  }
}))

const Home = () => {
  const classes = useStyles()
  const handleSelectLevel = (value) => {
    console.log(value)
  }
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <LayoutCard
        render={() => (
          <HomeLayout
            options={LEVEL_OPTIONS}
            initialLevel={INITIAL_LEVEL}
            onChange={handleSelectLevel}
          />
        )}
      />
    </Grid>
  )
}

export default Home
