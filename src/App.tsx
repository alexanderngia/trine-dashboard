import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/views/dashboard/dashboard";
import Login from "./components/views/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route
          path="/dashboard"
          render={() => {
            return localStorage.getItem("accessToken") ? (
              <Dashboard />
            ) : (
              <Redirect to="/login" />
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
