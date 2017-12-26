import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';


const MetadataFieldValueInput = ({ field, type }) => {
	let elem = null;
	switch (type) {
	case 'text':
		elem = (
			<Field
				name={`${field}.value`}
				type="text"
				component="textarea"
				placeholder="Value . . . "
			/>
		);
		break;
	case 'number':
		elem = (
			<Field
				name={`${field}.value`}
				type="number"
				component="input"
				placeholder="Value . . . "
			/>
		);
		break;
	case 'date':
		elem = (
			<Field
				name={`${field}.value`}
				type="date"
				component="input"
				placeholder="Value . . . "
			/>
		);
		break;
	case 'place':
		elem = (
			<div />
		);
		break;
	case 'media':
		elem = (
			<div />
		);
		break;
	case 'item':
		elem = (
			<div />
		);
		break;
	default:
		elem = (
			<Field
				name={`${field}.value`}
				type="text"
				component="input"
				placeholder="Value . . . "
			/>
		);
		break;
	}

	return elem;
};

export default MetadataFieldValueInput;
