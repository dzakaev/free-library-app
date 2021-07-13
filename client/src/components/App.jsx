import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { useSelector } from "react-redux";
import MainMenu from "./Main/MainMenu";
import MainBody from "./Main/MainBody";
import Profile from "./profile/Profile";

function App(props) {
  const token = useSelector((state) => state.application.token);
  if (!token) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact>
            <SigninPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
        <Redirect to="/signin" />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainMenu />
          <MainBody />
        </Route>

        <Route path="/profile">
          <MainMenu />
          <Profile />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/exit">
          <SignupPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
