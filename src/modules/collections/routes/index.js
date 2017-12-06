import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import CollectionsListPage from '../components/CollectionsListPage';
import CollectionDetail from '../components/CollectionDetail';

export default (
	<div>

		<Route path="/collections" component={ProjectLayout}>
			<IndexRoute component={CollectionsListPage} />
			<Route path="/collections/:slug" component={CollectionDetail} />
		</Route>

	</div>
);
