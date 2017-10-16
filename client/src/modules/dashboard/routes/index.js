import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dashboard routes
import DashboardLayout from '../layouts/DashboardLayout';
import MainPanel from './mainPanel/MainPanel';
import UserProfile from './userProfile/UserProfile';
import UserProfileTimeline from './userProfile/UserProfileTimeline';
import ItemsList from '../components/items/ItemsList';
import ItemEditorContainer from '../containers/ItemEditorContainer';
import CollectionsList from '../components/collections/CollectionsList';
import CollectionEditorContainer from '../containers/CollectionEditorContainer';
import ProjectEditorContainer from '../containers/ProjectEditorContainer';
import ProjectsView from '../components/projects/ProjectsView';
import Settings from './settings/Settings';

export default (
	<div>
		<Route path="/dashboard" component={DashboardLayout}>
			<IndexRoute component={ProjectsView} />

			{/* projects */}
			<Route path="/dashboard/projects" component={ProjectsView} />
			<Route path="/dashboard/projects/create" component={ProjectEditorContainer} />
			<Route path="/dashboard/projects/edit" component={ProjectEditorContainer} />

			{/* collections */}
			<Route path="/dashboard/collections" component={CollectionsList} />
			<Route path="/dashboard/collections/create" component={CollectionEditorContainer} />
			<Route path="/dashboard/collections/edit" component={CollectionEditorContainer} />

			{/* items */}
			<Route path="/dashboard/items" component={ItemsList} />
			<Route path="/dashboard/items/create" component={ItemEditorContainer} />
			<Route path="/dashboard/items/edit" component={ItemEditorContainer} />

			{/* user profile */}
			<Route path="/dashboard/user" component={UserProfile} />

			{/* application settings */}
			<Route path="/dashboard/settings" component={Settings} />
		</Route>
	</div>
);
