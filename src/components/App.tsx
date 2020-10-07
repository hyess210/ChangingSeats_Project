import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from 'react-router-dom';
import * as Pages from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Pages.MainPage />} />
        <Route
          exact
          path="/random-seats"
          render={() => <Pages.RandomSeatsPage />}
        />
        <Route
          exact
          path="/card-select"
          render={() => <Pages.CardSelectpage />}
        />
        <Route
          exact
          path="/team-building"
          render={() => <Pages.TeamBuildingPage />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
