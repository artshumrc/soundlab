import React from 'react';
import { Route } from 'react-router';
import PageContainer from '../containers/PageContainer';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

export default (
	<div>
		<Route
			path=":slug"
			component={props => (
				<ProjectLayout>
					<PageContainer {...props} />
				</ProjectLayout>
			)}
		/>
	</div>
);
