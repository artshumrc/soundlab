import React from 'react';
import {Route, IndexRoute} from 'react-router';
// import MainLayout from './layouts/MainLayout';
import ProjectLayout from './layouts/ProjectLayout';
import Home from './home/Home';
import CollectionsListPage from './collections/CollectionsListPage';
import CollectionDetail from './collections/CollectionDetail';
import ItemsListPage from './items/ItemsListPage';
import ItemDetail from './items/ItemDetail';
import ProjectHome from './projects/ProjectHome';
import Page from './pages/Page/Page';
import Dashboard from './dashboard/Dashboard';
import Articles from './dashboard/routes/Articles';
import Articles2 from './dashboard/routes/Articles2';
import Articles3 from './dashboard/routes/Articles3';
import MainPanel from './dashboard/routes/MainPanel';
import UserProfile from './dashboard/routes/userProfile/UserProfile';
import UserProfileTimeline from './dashboard/routes/userProfile/UserProfileTimeline';
import ExampleForms from './dashboard/routes/ExampleForms';
import MiradorUploader from './dashboard/routes/MiradorUploader';
import ItemEditor from './dashboard/routes/itemEditor/ItemEditor';
import CollectionEditor from './dashboard/routes/collectionEditor/CollectionEditor';
import ProjectEditor from './dashboard/routes/projectEditor/ProjectEditor';
import ProjectsView from './dashboard/routes/projectsView/ProjectsView';
import Settings from './dashboard/routes/settings/Settings';
import About from './about/About';
import Services from './services/Services';


import GraphiQL from './graphiql';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />

		<Route exact path="/about" component={About} />

		<Route exact path="/services" component={Services} />

		{/* Project home landing page (for tenant *.orphe.us instead of main orphe.us) */}
		<Route exact path="/project" component={ProjectHome} />

		<Route path="/page/new" component={Page} />
		<Route path="/page" component={Page} />

		<Route path="/collections" component={ProjectLayout}>
			<IndexRoute component={CollectionsListPage} />
			<Route path="/collections/:slug" component={CollectionDetail} />
		</Route>

		<Route path="/items" component={ProjectLayout}>
			<IndexRoute component={ItemsListPage} />
			<Route path="/items/:slug" component={ItemDetail} />
		</Route>

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

		{process.env.NODE_ENV === 'development' &&
		<Route exact path="/graphiql" component={GraphiQL} />
    }

	</div>
);
