import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home';
import Page from '../components/pages/Page/Page';

// Projects
import projectRoutes from '../modules/projects/routes';

// Dashboard
import Dashboard from '../components/dashboard/Dashboard';
import Articles from '../components/dashboard/routes/Articles';
import Articles2 from '../components/dashboard/routes/Articles2';
import Articles3 from '../components/dashboard/routes/Articles3';
import MainPanel from '../components/dashboard/routes/MainPanel';
import UserProfile from '../components/dashboard/routes/userProfile/UserProfile';
import UserProfileTimeline from '../components/dashboard/routes/userProfile/UserProfileTimeline';
import ExampleForms from '../components/dashboard/routes/ExampleForms';
import ItemEditor from '../components/dashboard/routes/itemEditor/ItemEditor';
import CollectionEditor from '../components/dashboard/routes/collectionEditor/CollectionEditor';
import ProjectEditor from '../components/dashboard/routes/projectEditor/ProjectEditor';
import ProjectsView from '../components/dashboard/routes/projectsView/ProjectsView';
import Settings from '../components/dashboard/routes/settings/Settings';

// GraphiQL
// import graphiQLRoutes from '../modules/graphiql/routes';
// GraphiQL browser UI for testing API
// {graphiQLRoutes}
import GraphiQL from '../modules/graphiql/components/graphiql';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />

		{/* Routes specific to projects (and collections and items) */}
		{projectRoutes}

		{/* Routes for dashboard */}
		<Route path="/dashboard" component={Dashboard}>
			<IndexRoute component={ProjectsView} />
			<Route path="/dashboard/articles" component={Articles} />
			<Route path="/dashboard/user" component={UserProfile} />
			<Route path="/dashboard/itemEditor" component={ItemEditor} />
			<Route path="/dashboard/collections/edit" component={CollectionEditor} />
			<Route path="/dashboard/projectEditor" component={ProjectEditor} />
			<Route path="/dashboard/projects" component={ProjectsView} />
			<Route path="/dashboard/settings" component={Settings} />
		</Route>

		<Route path="/graphiql" component={GraphiQL} />


	</div>
);
