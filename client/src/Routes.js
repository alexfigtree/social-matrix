
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Home from './Home';
import FormPostContainer from './FormPostContainer';

export default () => (
  <App>
    <Switch>
      <Route path={routes.FORM} component={FormPostContainer} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);