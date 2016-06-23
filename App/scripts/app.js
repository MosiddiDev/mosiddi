import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import AppHeader from './Components/Header';

// Views
import Home from './Views/Home';
import Dashboard from './Views/Dashboard';
import PageTemplate from './Views/PageTemplate';

var routes = (
  <Route name="app" path="/" handler={AppHeader}>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="pagetemplate" handler={PageTemplate}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, (Handler) => React.render(<Handler /> , document.body));
