import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainLayout from '../components/layouts/MainLayout';
import homeRoute from '../modules/home/routes';
//import itemRoutes from '../modules/items/routes';
//import pageRoutes from '../modules/pages/routes';
//import userRoutes from '../modules/users/routes';

const routes = (
  <Route path="/" component={MainLayout}>
		{homeRoute}
  </Route>
);

export default routes;
