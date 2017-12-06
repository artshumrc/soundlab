import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Home
import homeRoute from '../modules/home/routes';

// Articles
import articleRoutes from '../modules/articles/routes';

// Collections
import collectionRoutes from '../modules/collections/routes';

// Items
import itemRoutes from '../modules/items/routes';

// Pages
import pageRoutes from '../modules/pages/routes';

// Projects
import projectRoutes from '../modules/projects/routes';

// Dashboard
import dashboardRoutes from '../modules/dashboard/routes';


export default (
	<div>
		{/* Home Route for orphe.us */}
		{homeRoute}

		{/* Routes for articles */}
		{articleRoutes}

		{/* Routes for collections */}
		{collectionRoutes}

		{/* Routes for items */}
		{itemRoutes}

		{/* Routes for dashboard */}
		{dashboardRoutes}

		{/* Routes specific to projects (and collections and items) */}
		{projectRoutes}

		{/* Routes for single pages */}
		{pageRoutes}
	</div>
);
