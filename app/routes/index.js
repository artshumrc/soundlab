import React from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import SinglePageLayout from '../modules/layouts/SinglePageLayout'
import MainLayout from '../modules/layouts/MainLayout';
import homeRoute from '../modules/home/routes';
import audioRoutes from '../modules/audio/routes';
import resourceRoutes from '../modules/resources/routes';
import singlePageRoutes from '../modules/single/routes';
//import userRoutes from '../modules/users/routes';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
  		{homeRoute}
      {audioRoutes}
      {resourceRoutes}
    </Route>
    <Route path="/" component={SinglePageLayout}>
      {singlePageRoutes}
    </Route>
  </Router>
);

export default routes;
