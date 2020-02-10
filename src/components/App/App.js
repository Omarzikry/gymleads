import React from "react";
import Login from "../../routes/login";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import People from '../../routes/people';
import SinglePerson from "../../routes/singlePerson";
import Favourites from "../../routes/favourites";

const GlobalStyle = createGlobalStyle`
${reset}
  html{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  body{
    max-width: 450px;
    margin: 0 auto;
    padding-top: 5em;
  }
`;

const App = props => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/people/:id">
          <SinglePerson />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
