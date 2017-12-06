import React from 'react';
import { Route, IndexRoute } from 'react-router';

// layouts
import ProjectLayout from '../../projects/layouts/ProjectLayout';

// components
import ArticleListPage from '../components/ArticleListPage';
import ArticleDetail from '../components/ArticleDetail';

export default (
	<div>

		<Route path="/articles" component={ProjectLayout}>
			<IndexRoute component={ArticleListPage} />
			<Route path="/articles/:slug" component={ArticleDetail} />
		</Route>

	</div>
);
