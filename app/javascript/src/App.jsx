import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Dashboard from "./layout/Dashboard";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Header from "./layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
