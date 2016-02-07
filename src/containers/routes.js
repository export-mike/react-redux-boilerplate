import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import ProtectedRoute from './ProtectedRoute';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import NotFound from './NotFound';

class Root extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/login'} component={AuthLayout}>
          <IndexRoute component={Login}/>
          <Route path={'/forgot'} component={ForgotPassword} />
          <Route path={'*'} component={NotFound}/>
        </Route>
        <Route path={'/'} component={MainLayout}>
          <IndexRoute component={ProtectedRoute(Home)} />
          <Route path={'*'} component={ProtectedRoute(NotFound)}/>
        </Route>
      </Router>
      );
  }
}

export default Root;
