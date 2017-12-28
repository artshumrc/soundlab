import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './ItemTitle.css';


const ItemTitle = ({ title, showEditLink }) => (
	<div className="itemTitleOuter">
		<h1 className="itemTitle">{title}</h1>
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
