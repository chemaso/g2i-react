import React from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Button from 'components/common/ButtonWithLoading'
import InputSelect from 'components/common/InputSelect'
import { HomeLayoutProps, HomeLayoutDefaults } from 'props/components/Home/layout'
import { FULL_WIDTH } from 'resources/constants'
import { strings } from 'resources/strings'

import { useHomeLayoutStyles } from './styles'

// HomeLayout is a component contains the initial page layout static data and inputs
const HomeLayout = ({ initialLevel, loading, onChange, onStart, options }) => {
  const classes = useHomeLayoutStyles()
  return (
    <Grid justify="center" alignItems="center" container className={classes.root}>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.title} variant="h2">
          {strings.home.welcome}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.content} variant="h5">
          {strings.home.description}
        </Typography>
        <Typography className={classes.content} variant="h5">
          {strings.home.score}
        </Typography>
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Divider className={classes.divider} variant="middle" />
      </Grid>
      <Grid item xs={FULL_WIDTH}>
        <Typography className={classes.level} variant="h5">
          {strings.home.difficulty}
        </Typography>
      </Grid>
      <Grid item className={classes.select} xs={FULL_WIDTH}>
        <InputSelect
          options={options}
          loading={loading}
          initial={initialLevel}
          onChange={onChange}
        />
      </Grid>
      <Grid item className={classes.select} xs={FULL_WIDTH}>
        <Button
          id='begin-button'
          loading={loading}
          onClick={onStart}
          className={classes.button}
          size="large"
          position="endIcon"
          variant="contained"
          icon={<SendIcon />}
        >
          {strings.home.begin}
        </Button>
      </Grid>
    </Grid>
  )
}

HomeLayout.propTypes = HomeLayoutProps
HomeLayout.defaultProps = HomeLayoutDefaults

export default HomeLayout
