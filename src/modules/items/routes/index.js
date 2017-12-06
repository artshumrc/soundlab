import React from 'react';
import { Route, IndexRoute } from 'react-router';


// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import ItemsListPage from '../components/ItemsListPage';
import ItemDetail from '../components/ItemDetail';


export default (
	<div>
		<Route path="/items" component={ProjectLayout}>
			<IndexRoute component={ItemsListPage} />
			<Route path="/items/:slug" component={ItemDetail} />
		</Route>
	</div>
);
