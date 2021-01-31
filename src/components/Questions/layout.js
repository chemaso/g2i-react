import React from 'react'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import { QuestionLayoutDefaults, QuestionLayoutProps } from 'props/components/Questions/layout'
import { FULL_WIDTH } from 'resources/constants'
import { strings } from 'resources/strings'

import { useQuestionsLayoutStyles } from './styles'

// QuestionsLayout is a component contain the each question layout with buttons
const QuestionsLayout = ({ category, current, difficulty, onSelect, question, total }) => {
  const classes = useQuestionsLayoutStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.content} variant="h6">
          {strings.questions.question} {current} {strings.questions.of} {total}{' '}
          {strings.questions.difficulty} {difficulty}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.title} variant="h3">
          {strings.questions.category}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.title} variant="h5">
          {category}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={FULL_WIDTH} className={classes.question}>
        <Typography className={classes.content} variant="h5">
          {question}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid container justify="space-around">
        <Button
          onClick={() => onSelect(true)}
          classes={{ root: classes.button }}
          color="primary"
          size="large"
          variant="contained"
          startIcon={<CheckIcon />}
        >
          {strings.questions.true}
        </Button>
        <Button
          onClick={() => onSelect(false)}
          classes={{ root: classes.button }}
          color="secondary"
          size="large"
          variant="contained"
          startIcon={<CloseIcon />}
        >
          {strings.questions.false}
        </Button>
      </Grid>
    </Grid>
  )
}

QuestionsLayout.propTypes = QuestionLayoutProps
QuestionsLayout.defaultProps = QuestionLayoutDefaults

export default QuestionsLayout
