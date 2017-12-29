import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ArticleTitle.css';


const ArticleTitle = ({ title, slug, showEditLink }) => (
	<div className="articleTitleOuter">
		<h1 className="articleTitle">{title}</h1>
		{showEditLink ?
			<Link
				to={`/articles/${slug}/edit`}
				className="articleTitleLink"
			>
				Edit
			</Link>
		: ''}
	</div>
);

ArticleTitle.propTypes = {
	title: PropTypes.string,
	showEditLink: PropTypes.bool,
};

ArticleTitle.defaultProps = {
	title: '',
	showEditLink: false,
};


export default ArticleTitle;
