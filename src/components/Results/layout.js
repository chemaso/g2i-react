import React from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Button from 'components/common/ButtonWithLoading'
import ResultCard from 'components/Results/resultCard'
import { ResultsLayoutProps, ResultsLayoutDefaults } from 'props/components/Results/layout'

const useStyles = makeStyles((theme) => ({
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
  question: {
    padding: 20
  },
  results: {
    maxHeight: '50vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  button: theme.awesomeButton,
  divider: theme.divider
}))

const ResultsLayout = ({ answers, corrects, level, onSelect, total }) => {
  const classes = useStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.content} variant="h6">
          Difficulty: {level}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h3">
          Results:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h5">
          You score {corrects} / {total}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={12} className={classes.results}>
        {answers.map((item) => (
          <ResultCard result={item} />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid container justify="space-around">
        <Button
          loading={false}
          onClick={onSelect}
          className={classes.button}
          size="large"
          position="endIcon"
          variant="contained"
          icon={<SendIcon />}
        >
          Play Again?
        </Button>
      </Grid>
    </Grid>
  )
}

ResultsLayout.propTypes = ResultsLayoutProps
ResultsLayout.defaultProps = ResultsLayoutDefaults

export default ResultsLayout
