import React from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Button from 'components/common/ButtonWithLoading'
import InputSelect from 'components/common/InputSelect'
import { HomeLayoutProps, HomeLayoutDefaults } from 'props/components/Home/layout'

import { useHomeLayoutStyles } from './styles'

const HomeLayout = ({ initialLevel, loading, onChange, onStart, options }) => {
  const classes = useHomeLayoutStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
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
        <InputSelect
          options={options}
          loading={loading}
          initial={initialLevel}
          onChange={onChange}
        />
      </Grid>
      <Grid item className={classes.select} xs={12}>
        <Button
          loading={loading}
          onClick={onStart}
          className={classes.button}
          size="large"
          position="endIcon"
          variant="contained"
          icon={<SendIcon />}
        >
          Begin
        </Button>
      </Grid>
    </Grid>
  )
}

HomeLayout.propTypes = HomeLayoutProps
HomeLayout.defaultProps = HomeLayoutDefaults

export default HomeLayout
