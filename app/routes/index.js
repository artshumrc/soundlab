import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainLayout from '../components/layouts/MainLayout';
import homeRoute from '../modules/home/routes';
import audioRoutes from '../modules/audio/routes';
import resourceRoutes from '../modules/resources/routes';
//import userRoutes from '../modules/users/routes';

const routes = (
  <Route path="/" component={MainLayout}>
		{homeRoute}
    {audioRoutes}
    {resourceRoutes}
  </Route>
);

export default routes;
