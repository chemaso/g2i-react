import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
      <CardContent>
        {render()}
      </CardContent>
    </Card>
  )
}

export default LayoutCard
