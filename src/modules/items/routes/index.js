import React from 'react';
import { Route, IndexRoute } from 'react-router';


// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import ItemEditorContainer from '../containers/ItemEditorContainer';
import ItemsListPage from '../components/ItemsListPage';
import ItemDetail from '../components/ItemDetail';


export default (
	<div>
		<Route path="/items" component={ProjectLayout}>
			<IndexRoute component={ItemsListPage} />
			<Route path="/items/create" component={ItemEditorContainer} />
			<Route path="/items/:slug" component={ItemDetail} />
			<Route path="/items/:slug/edit" component={ItemEditorContainer} />
		</Route>
	</div>
);
