import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ArticleTitle.css';


const ArticleTitle = ({ title, editLink }) => (
	<div className="articleTitleOuter">
		<h1 className="articleTitle">{title}</h1>
		{editLink ?
			<Link
				to={editLink}
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
