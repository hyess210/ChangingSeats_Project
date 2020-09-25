import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" render={() => <Pages.MainPage />} />
        <Route
          exact
          path="/random-seats"
          render={() => <Pages.RandomSeatsPage />}
        />
=======
        <Route exact path='/' render={ () => <Pages.MainPage/> } />
>>>>>>> master
      </Switch>
    </BrowserRouter>
  );
};

export default App;
