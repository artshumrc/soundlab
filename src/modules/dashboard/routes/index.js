import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dashboard routes
import ProjectLayout from '../../projects/layouts/ProjectLayout';
import DashboardContainer from '../containers/DashboardContainer';


export default (
	<div>
		<Route path="/dashboard" component={ProjectLayout}>
			<IndexRoute component={DashboardContainer} />
		</Route>
	</div>
);
