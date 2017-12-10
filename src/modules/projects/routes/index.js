import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Projects
import MainLayout from '../../../layouts/MainLayout';
import ProjectLayout from '../layouts/ProjectLayout';
import ProjectCreateContainer from '../containers/ProjectCreateContainer';
import ProjectHomeContainer from '../containers/ProjectHomeContainer';

export default (
	<div>
		{/* Project home landing page (for project *.orphe.us instead of main orphe.us) */}
		<Route exact path="/project" component={ProjectHomeContainer} />

		<Route path="/create" component={MainLayout}>
			<IndexRoute component={ProjectCreateContainer} />
		</Route>
	</div>
);
