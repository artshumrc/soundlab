import React from 'react';

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

// users
import userRoutes from '../modules/users/routes';

// miradors
import miradorRoutes from '../modules/mirador/routes';


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

		{/* Mirdaors */}
		{miradorRoutes}

		{/* Routes for dashboard */}
		{dashboardRoutes}

		{/* Routes for dashboard */}
		{userRoutes}

		{/* Routes specific to projects (and collections and items) */}
		{projectRoutes}

		{/* Routes for single pages */}
		{pageRoutes}
	</div>
);
