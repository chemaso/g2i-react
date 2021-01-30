import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './containers/Home'
import Questions from './containers/Questions'
import Results from './containers/Results'

export default function RoutesGenerator () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  )
}
