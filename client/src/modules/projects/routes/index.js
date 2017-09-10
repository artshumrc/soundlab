import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Projects
import ProjectLayout from '../layouts/ProjectLayout';
import ProjectHome from '../components/ProjectHome';

// Collections
import CollectionsListPage from '../../collections/components/CollectionsListPage';
import CollectionDetail from '../../collections/components/CollectionDetail';

// Items
import ItemsListPage from '../../items/components/ItemsListPage';
import ItemDetail from '../../items/components/ItemDetail';


export default (
	<div>
		{/* Project home landing page (for project *.orphe.us instead of main orphe.us) */}
		<Route exact path="/project" component={ProjectHome} />

		<Route path="/collections" component={ProjectLayout}>
			<IndexRoute component={CollectionsListPage} />
			<Route path="/collections/:slug" component={CollectionDetail} />
		</Route>

		<Route path="/items" component={ProjectLayout}>
			<IndexRoute component={ItemsListPage} />
			<Route path="/items/:slug" component={ItemDetail} />
		</Route>
	</div>
);
