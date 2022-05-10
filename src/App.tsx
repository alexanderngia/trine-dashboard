import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import { menuAdmin } from "./constant/sidebar";
import Dashboard from "./components/views/dashboard/dashboard";
import Login from "./components/views/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          render={() => {
            return !localStorage.getItem("accessToken") ? (
              <Login />
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        {React.Children.toArray(
          menuAdmin.map((route) => {
            return (
              <Route
                exact
                path={route.path}
                render={() => {
                  return localStorage.getItem("accessToken") ? (
                    route?.page
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              ></Route>
            );
          })
        )}
      </Switch>
    </Router>
  );
}

export default App;
