import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import TextEditorContainer from '../containers/TextEditorContainer';
import ReadingEnvironmentContainer from '../containers/ReadingEnvironmentContainer';
import TextListPageContainer from '../containers/TextListPageContainer';

export default (
	<div>

		<Route path="/texts" component={ProjectLayout}>
			<IndexRoute component={TextListPageContainer} />
			<Route path="/texts/create" component={TextEditorContainer} />
			<Route path="/texts/:id/:location" component={ReadingEnvironmentContainer} />
			<Route path="/texts/:id/edit" component={TextEditorContainer} />
		</Route>

	</div>
);
