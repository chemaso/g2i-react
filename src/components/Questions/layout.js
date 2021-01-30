import React from 'react'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import { QuestionLayoutDefaults, QuestionLayoutProps } from 'props/components/Questions/layout'

import { useQuestionsLayoutStyles } from './styles'

const QuestionsLayout = ({ category, current, difficulty, onSelect, question, total }) => {
  const classes = useQuestionsLayoutStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.content} variant="h6">
          Question {current} of {total} - Difficulty: {difficulty}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h3">
          Category:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h5">
          {category}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={12} className={classes.question}>
        <Typography className={classes.content} variant="h5">
          {question}
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
          True
        </Button>
        <Button
          onClick={() => onSelect(false)}
          classes={{ root: classes.button }}
          color="secondary"
          size="large"
          variant="contained"
          startIcon={<CloseIcon />}
        >
          False
        </Button>
      </Grid>
    </Grid>
  )
}

QuestionsLayout.propTypes = QuestionLayoutProps
QuestionsLayout.defaultProps = QuestionLayoutDefaults

export default QuestionsLayout
