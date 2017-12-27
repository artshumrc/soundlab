import React from 'react';
import PropTypes from 'prop-types';

import './ItemTitle.css';


const ItemTitle = ({ title }) => (
	<div className="itemTitleOuter">
		<h1 className="itemTitle">{title}</h1>
	</div>
);

ItemTitle.propTypes = {
	title: PropTypes.string,
};

ItemTitle.defaultProps = {
	title: '',
};


export default ItemTitle;
