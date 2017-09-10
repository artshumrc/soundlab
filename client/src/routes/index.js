import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home';
import Page from '../components/pages/Page/Page';

// Projects
import projectRoutes from '../modules/projects/routes';

// Dashboard
import dashboardRoutes from '../modules/dashboard/routes';

// GraphiQL browser UI for testing API
import graphiqlRoutes from '../modules/graphiql/routes';


export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />

		{/* Routes specific to projects (and collections and items) */}
		{projectRoutes}

		{/* Routes for dashboard */}
		{dashboardRoutes}

		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
