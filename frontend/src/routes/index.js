import React from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import MainLayout from '../modules/layouts/MainLayout';

import authRoutes from '../modules/auth/routes';
import homeRoute from '../modules/home/routes';
import audioRoutes from '../modules/audio/routes';
import resourceRoutes from '../modules/resources/routes';
import singlePageRoutes from '../modules/pages/routes';
import playlistRoutes from '../modules/playlist/routes';
import userRoutes from '../modules/users/routes';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			{homeRoute}
			{audioRoutes}
			{resourceRoutes}
			{playlistRoutes}
			{userRoutes}
			{authRoutes}
			{singlePageRoutes}
		</Route>
	</Router>
);

export default routes;
