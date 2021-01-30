import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const StartPage = () => {
    return (
        <div>Hello world</div>
    )
}

const QuestionsPage = () => {
    return (
        <div>Hello world</div>
    )
}

export default function RoutesGenerator() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/questions" component={QuestionsPage} />
      </Switch>
    </Router>
  );
}
