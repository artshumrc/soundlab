import React from 'react';
import ArticleCover from '../ArticleCover';
import ArticleList from '../ArticleList';

import './ArticleListPage.css';

const ArticleListPage = props => (
	<div >
		<ArticleCover
			title="Article"
		/>
		<ArticleList />
	</div>
);


export default ArticleListPage;
