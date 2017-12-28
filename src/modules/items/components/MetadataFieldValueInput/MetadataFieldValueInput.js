import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import ReactMapboxGl from 'react-mapbox-gl';


import ItemEditorUploader from '../../../dashboard/components/ItemEditorUploader';
import ItemSelectorField from '../../../dashboard/components/ItemSelectorField';



class MetadataFieldValueInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			files: [],
			items: [],
			selectedItems: [],
		};
	}

	changeFilesValue(files) {
		console.info(files);
	}

	toggleSelectedItem(item) {
		console.info(item);
	}

	render () {
		const { field, type, items } = this.props;

		const Map = ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibHVrZWhvbGxpcyIsImEiOiJ6Rk1vdjc0In0.jQDtXA8wqU_wYi5p1ClCyw',
			scrollZoom: false,
		});

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
				<ItemEditorUploader
					changeValue={this.changeFilesValue}
					files={this.state.files}
				/>
			);
			break;
		case 'item':
			elem = (
				<ItemSelectorField
					items={items}
					selectedItems={this.state.selectedItems}
					toggleSelectedItem={this.toggleSelectedItem}
				/>
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
	}
}

MetadataFieldValueInput.propTypes = {
	field: PropTypes.string,
	type: PropTypes.string,
	items: PropTypes.array,
};

MetadataFieldValueInput.defaultProps = {
	field: null,
	type: 'text',
	items: [],
};

export default MetadataFieldValueInput;
