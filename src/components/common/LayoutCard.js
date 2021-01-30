import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { LayoutCardProps, LayoutCardDefaults } from 'props/components/common/LayoutCard'

const useStyles = makeStyles(({ layout }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${layout.xl}vh`,
    width: `${layout.xl}vw`
  }
}))

const LayoutCard = ({ render }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>{render()}</CardContent>
    </Card>
  )
}

LayoutCard.propTypes = LayoutCardProps
LayoutCard.defaultProps = LayoutCardDefaults

export default LayoutCard
