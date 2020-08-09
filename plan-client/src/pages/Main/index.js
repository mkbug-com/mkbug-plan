import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NotFound from '../NotFound';

export default function (props) {
  return <Router>
    <Switch>
      <Route component={NotFound}/>
    </Switch>
  </Router>
}