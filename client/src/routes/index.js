import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home';
import Page from '../components/pages/Page/Page';

// Projects
import ProjectRoutes from '../modules/projects/routes';

// Dashboard
import Dashboard from '../components/dashboard/Dashboard';
import Articles from '../components/dashboard/routes/Articles';
import Articles2 from '../components/dashboard/routes/Articles2';
import Articles3 from '../components/dashboard/routes/Articles3';
import MainPanel from '../components/dashboard/routes/MainPanel';
import UserProfile from '../components/dashboard/routes/userProfile/UserProfile';
import UserProfileTimeline from '../components/dashboard/routes/userProfile/UserProfileTimeline';
import ExampleForms from '../components/dashboard/routes/ExampleForms';
import MiradorUploader from '../components/dashboard/routes/MiradorUploader';
import ItemEditor from '../components/dashboard/routes/itemEditor/ItemEditor';
import CollectionEditor from '../components/dashboard/routes/collectionEditor/CollectionEditor';
import ProjectEditor from '../components/dashboard/routes/projectEditor/ProjectEditor';
import ProjectsView from '../components/dashboard/routes/projectsView/ProjectsView';
import Settings from '../components/dashboard/routes/settings/Settings';

// GraphiQL
import GraphiQLRoutes from '../modules/graphiql/routes';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />

		{/* Routes specific to projects (and collections and items) */}
		<ProjectRoutes />

		{/* Routes for dashboard */}
		<Route path="/dashboard" component={Dashboard}>
			<IndexRoute component={ProjectsView} />
			<Route path="/dashboard/articles" component={Articles} />
			<Route path="/dashboard/articles2" component={Articles2} />
			<Route path="/dashboard/articles3" component={Articles3} />
			<Route path="/dashboard/user" component={UserProfile} />
			<Route path="/dashboard/user2" component={UserProfileTimeline} />
			<Route path="/dashboard/form" component={ExampleForms} />
			<Route path="/dashboard/mirador" component={MiradorUploader} />
			<Route path="/dashboard/itemEditor" component={ItemEditor} />
			<Route path="/dashboard/collectionEditor" component={CollectionEditor} />
			<Route path="/dashboard/projectEditor" component={ProjectEditor} />
			<Route path="/dashboard/projects" component={ProjectsView} />
			<Route path="/dashboard/settings" component={Settings} />
		</Route>

		{/* GraphiQL browser UI for testing API */}
		<GraphiQLRoutes />
	</div>
);
