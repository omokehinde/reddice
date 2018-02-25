import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default (
  <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={App} />
  </Switch>
)
