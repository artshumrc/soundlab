import React from 'react';
import './ItemMetaField.css';

const ItemMetaField = props => (
	<div className="itemMetaField">
		<label>{props.label}</label>
		<span>{props.value}</span>
	</div>
);


export default ItemMetaField;
