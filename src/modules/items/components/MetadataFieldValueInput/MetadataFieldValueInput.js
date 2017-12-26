import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
	accessToken: 'pk.eyJ1IjoibHVrZWhvbGxpcyIsImEiOiJ6Rk1vdjc0In0.jQDtXA8wqU_wYi5p1ClCyw',
	scrollZoom: false,
});

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
			<Map
			  style="mapbox://styles/lukehollis/cj7dnh4fb11452smw1dj34x04" // eslint-disable-line
				containerStyle={{
					height: '210px',
					width: '100%'
				}}
				center={[
					-71.1139213, 42.3741574
				]}
				zoom={[13]}
			/>
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
