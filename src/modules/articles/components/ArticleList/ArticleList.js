import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Grid } from 'react-bootstrap';

import NoResults from '../../../../components/pagination/NoResults';
import ArticleListItem from '../ArticleListItem';

import './ArticleList.css';

const ArticleList = ({ articles, horizontal }) => {
	const classes = [];


	if (horizontal) {
		classes.push('articlesListHorizontal');
	}

	return (
		<div className={`articlesList ${classes.join(' ')}`}>
			{articles.map((listArticle, i) => (
				<ArticleListItem
					key={`${listArticle.slug}-${i}`}
					{...listArticle}
				/>
			))}

			{!articles || !articles.length ?
				<NoResults
					message="No articles have been added to this collection yet."
				/>
			: ''}
		</div>
	);
};

ArticleList.propTypes = {
	articles: PropTypes.array,
};

ArticleList.defaultProps = {
	articles: [],
};

export default ArticleList;
