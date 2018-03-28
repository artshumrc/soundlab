import React from 'react';
import PropTypes from 'prop-types';

import ItemMetaFieldMap from '../ItemMetaFieldMap';


import './ItemMetaField.css';


const ItemMetaField = ({ type, label, value }) => {


	let elem = null;
	switch (type) {
	case 'text':
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	case 'number':
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	case 'date':
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	case 'place':
		elem = (
			<ItemMetaFieldMap
				label={label}
				value={value}
			/>
		);
		break;
	case 'media':
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	case 'item':
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	default:
		elem = (
			<div className="itemMetaField">
				<label>{label}</label>
				<span>{value}</span>
			</div>
		);
		break;
	}

	return elem;
}

ItemMetaField.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
};


export default ItemMetaField;
