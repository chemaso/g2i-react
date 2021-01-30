import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { LayoutCardProps, LayoutCardDefaults } from 'props/components/common/LayoutCard'

import { useLayoutCardStyles } from './styles'

const LayoutCard = ({ render }) => {
  const classes = useLayoutCardStyles()
  return (
    <Card className={classes.root}>
      <CardContent>{render()}</CardContent>
    </Card>
  )
}

LayoutCard.propTypes = LayoutCardProps
LayoutCard.defaultProps = LayoutCardDefaults

export default LayoutCard
