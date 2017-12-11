import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dashboard routes
import ProjectLayout from '../../projects/layouts/ProjectLayout';
import ProjectEditorContainer from '../../projects/containers/ProjectEditorContainer';
import ProjectMembersContainer from '../../projects/containers/ProjectMembersContainer';
import DashboardContainer from '../containers/DashboardContainer';


export default (
	<div>
		<Route path="/dashboard" component={ProjectLayout}>
			<IndexRoute component={DashboardContainer} />
			<Route path="/dashboard/settings" component={ProjectEditorContainer} />
			<Route path="/dashboard/members" component={ProjectMembersContainer} />
		</Route>
	</div>
);
