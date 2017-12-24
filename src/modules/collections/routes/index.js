import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import CollectionEditorContainer from '../containers/CollectionEditorContainer';
import CollectionDetailContainer from '../containers/CollectionDetailContainer';
import CollectionListPageContainer from '../containers/CollectionListPageContainer';

export default (
	<div>

		<Route path="/collections" component={ProjectLayout}>
			<IndexRoute component={CollectionListPageContainer} />
			<Route path="/collections/create" component={CollectionEditorContainer} />
			<Route path="/collections/:slug" component={CollectionDetailContainer} />
			<Route path="/collections/:slug/edit" component={CollectionEditorContainer} />
		</Route>

	</div>
);
