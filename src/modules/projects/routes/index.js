import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Projects
import ProjectLayout from '../layouts/ProjectLayout';
import ProjectCreateContainer from '../containers/ProjectCreateContainer';
import ProjectHome from '../components/ProjectHome';

export default (
	<div>
		{/* Project home landing page (for project *.orphe.us instead of main orphe.us) */}
		<Route exact path="/project" component={ProjectHome} />

		<Route path="/create" component={ProjectLayout}>
			<IndexRoute component={ProjectCreateContainer} />
		</Route>
	</div>
);
