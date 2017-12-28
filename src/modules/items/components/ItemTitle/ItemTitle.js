import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ItemTitle.css';


const ItemTitle = ({ title, slug, showEditLink }) => (
	<div className="itemTitleOuter">
		<h1 className="itemTitle">{title}</h1>
		{showEditLink ?
			<Link
				to={`/items/${slug}/edit`}
				className="itemTitleLink"
			>
				Edit
			</Link>
		: ''}
	</div>
);

ItemTitle.propTypes = {
	title: PropTypes.string,
	showEditLink: PropTypes.bool,
};

ItemTitle.defaultProps = {
	title: '',
	showEditLink: false,
};


export default ItemTitle;
