import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './containers/Home'

const QuestionsPage = () => {
  return (
        <div>Hello world</div>
  )
}

export default function RoutesGenerator () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={QuestionsPage} />
      </Switch>
    </Router>
  )
}
