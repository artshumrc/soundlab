import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dashboard routes
import DashboardLayout from '../layouts/DashboardLayout';
import MainPanel from './mainPanel/MainPanel';
import UserProfile from './userProfile/UserProfile';
import UserProfileTimeline from './userProfile/UserProfileTimeline';
import ItemEditor from './itemEditor/ItemEditor';
import CollectionEditor from './collectionEditor/CollectionEditor';
import ProjectEditor from './projectEditor/ProjectEditor';
import ProjectsView from './projectsView/ProjectsView';
import Settings from './settings/Settings';

export default (
	<div>
		<Route path="/dashboard" component={DashboardLayout}>
			<IndexRoute component={ProjectsView} />
			<Route path="/dashboard/user" component={UserProfile} />
			<Route path="/dashboard/itemEditor" component={ItemEditor} />
			<Route path="/dashboard/collections/edit" component={CollectionEditor} />
			<Route path="/dashboard/projectEditor" component={ProjectEditor} />
			<Route path="/dashboard/projects" component={ProjectsView} />
			<Route path="/dashboard/settings" component={Settings} />
		</Route>
	</div>
);
