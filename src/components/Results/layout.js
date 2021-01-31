import React from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Button from 'components/common/ButtonWithLoading'
import ResultCard from 'components/Results/resultCard'
import { ResultsLayoutProps, ResultsLayoutDefaults } from 'props/components/Results/layout'
import { FULL_WIDTH } from 'resources/constants'
import { strings } from 'resources/strings'

import { useResultsLayoutStyles } from './styles'

const ResultsLayout = ({ answers, corrects, level, onSelect, total }) => {
  const classes = useResultsLayoutStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.content} variant="h6">
          {strings.results.difficulty} {level}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.title} variant="h3">
          {strings.results.results}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.title} variant="h5">
          {strings.results.score} {corrects} / {total}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={FULL_WIDTH} className={classes.results}>
        {answers.map((item) => (
          <ResultCard key={item.question} result={item} />
        ))}
      </Grid>
      <Grid item xs={FULL_WIDTH}>
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
          {strings.results.again}
        </Button>
      </Grid>
    </Grid>
  )
}

ResultsLayout.propTypes = ResultsLayoutProps
ResultsLayout.defaultProps = ResultsLayoutDefaults

export default ResultsLayout
