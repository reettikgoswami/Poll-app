import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { either, isEmpty, isNil } from "ramda";
import "semantic-ui-css/semantic.min.css";

import Dashboard from "./layout/Dashboard";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Header from "./layout/Header";
import { getFromLocalStorage } from "./Utils/index";
import { setAuthHeaders } from "../apis/axios";

const App = () => {
  const authToken = getFromLocalStorage("authToken");

  const isUserLoggedIn =
    !either(isNil, isEmpty)(authToken) && authToken !== "null";

  useEffect(() => {
    setAuthHeaders();
  }, []);

  return (
    <Router>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
