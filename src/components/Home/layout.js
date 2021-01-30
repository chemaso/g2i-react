import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import InputSelect from 'components/common/InputSelect'
import SendIcon from '@material-ui/icons/Send'

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
  select: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  button: theme.awesomeButton,
  divider: theme.divider
}))

const HomeLayout = ({ onChange, options, initialLevel }) => {
  const classes = useStyles()
  return (
    <Grid justify="center" alignItems="center" container>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h2">
          Welcome to the Trivia Challenge!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.content} variant="h5">
          You will be presented with 10 True or False questions.
        </Typography>
        <Typography className={classes.content} variant="h5">
          Can you score 100%?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.level} variant="h5">
          Please select a difficulty level:
        </Typography>
      </Grid>
      <Grid item className={classes.select} xs={12}>
        <InputSelect options={options} initial={initialLevel} onChange={onChange} />
      </Grid>
      <Grid item className={classes.select} xs={12}>
        <Button className={classes.button} size="large" variant="contained" endIcon={<SendIcon />}>
          Begin
        </Button>
      </Grid>
    </Grid>
  )
}

export default HomeLayout
