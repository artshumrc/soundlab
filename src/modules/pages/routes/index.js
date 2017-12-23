import React from 'react';
import { Route } from 'react-router';
import PageContainer from '../containers/PageContainer';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

export default (
	<div>
		<Route
			path=":slug"
			component={() => (
				<ProjectLayout>
					<PageContainer />
				</ProjectLayout>
			)}
		/>
	</div>
);
