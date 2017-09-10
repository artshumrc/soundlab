import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dashboard routes
import DashboardLayout from '../layouts/DashboardLayout';
import MainPanel from './mainPanel/MainPanel';
import UserProfile from './userProfile/UserProfile';
import UserProfileTimeline from './userProfile/UserProfileTimeline';
import ItemEditor from './itemEditor/ItemEditor';
import CollectionsList from './collections/CollectionsList';
import CollectionEditor from './collections/CollectionEditor';
import ProjectEditor from './projectEditor/ProjectEditor';
import ProjectsView from './projectsView/ProjectsView';
import Settings from './settings/Settings';

export default (
	<div>
		<Route path="/dashboard" component={DashboardLayout}>
			<IndexRoute component={ProjectsView} />

			{/* items */}
			<Route path="/dashboard/items" component={ItemEditor} />
			<Route path="/dashboard/items/create" component={ItemEditor} />
			<Route path="/dashboard/items/edit" component={ItemEditor} />

			{/* collections */}
			<Route path="/dashboard/collections" component={CollectionsList} />
			<Route path="/dashboard/collections/create" component={CollectionEditor} />
			<Route path="/dashboard/collections/edit" component={CollectionEditor} />

			{/* projects */}
			<Route path="/dashboard/projects" component={ProjectsView} />
			<Route path="/dashboard/projects/edit" component={ProjectEditor} />

			{/* user profile */}
			<Route path="/dashboard/user" component={UserProfile} />

			{/* application settings */}
			<Route path="/dashboard/settings" component={Settings} />
		</Route>
	</div>
);
