import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router'

import AppHeader from './Components/Header';

// Views
import Home from './Views/Home';
import Dashboard from './Views/Dashboard';
import PageTemplate from './Views/PageTemplate';

var routes = (
  <Route path="/" component={AppHeader}>
    <IndexRoute component={Home} />
    <Route path="dashboard" component={Dashboard}/>
    <Route path="pagetemplate" component={PageTemplate}/>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.body);
