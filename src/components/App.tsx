import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={ () => <Pages.MainPage/> } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
