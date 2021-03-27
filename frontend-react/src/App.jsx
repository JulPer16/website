import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppRoute from './AppRoute';
import ProtectedLayout from './layouts/ProtectedLayout';
import StandardLayout from './layouts/Standard';
import Callback from './pages/CallBack';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Page404 from './pages/Page404';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path={'/'} component={Dashboard} layout={StandardLayout} />
        <AppRoute exact path={'/home'} component={Home} layout={ProtectedLayout} />
        <Route exact path={'/callback'} component={Callback} />
        <Route exact path="/404" component={Page404} />
        <Redirect path="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
