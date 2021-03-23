import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppRoute from './AppRoute';
import StandardLayout from './layouts/Standard';

import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path={'/'} component={Dashboard} layout={StandardLayout} />
        <Route exact path="/404" component={Page404} />
        <Redirect path="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
