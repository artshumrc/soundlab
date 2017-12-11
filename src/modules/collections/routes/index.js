import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import CollectionEditorContainer from '../containers/CollectionEditorContainer';
import CollectionsListPage from '../components/CollectionsListPage';
import CollectionDetail from '../components/CollectionDetail';

export default (
	<div>

		<Route path="/collections" component={ProjectLayout}>
			<IndexRoute component={CollectionsListPage} />
			<Route path="/collections/create" component={CollectionEditorContainer} />
			<Route path="/collections/:slug" component={CollectionDetail} />
			<Route path="/collections/:slug/edit" component={CollectionEditorContainer} />
		</Route>

	</div>
);
