import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import MetadataField from '../MetadataField';
import NoResults from '../../../../components/pagination/NoResults';


const MetadataFields = ({ fields }) => (
	<div className="itemEditorMetadata">
		<div className="itemEditorMetadataLabels">
			<Row>
				<Col md={2}>
					<label>Type</label>
				</Col>
				<Col md={2}>
					<label>Label</label>
				</Col>
				<Col md={7}>
					<label>Value</label>
				</Col>
				<Col md={1} />
			</Row>
		</div>
		{fields.map((field, index) => (
			<MetadataField
				field={field}
				index={index}
				handleRemove={() => fields.remove(index)}
			/>
		))}

		{!fields.length ?
			<div className="itemEditorMetadataNoResults">
				<NoResults
					message="No metadata entered for this item."
				/>
			</div>
		: ''}

		<button
			className="itemEditorButton itemEditorAddMetadata"
			onClick={() => fields.push({})}
		>
			<i className="mdi mdi-plus" />
			Add metadata
		</button>
	</div>
);

MetadataFields.propTypes = {
	fields: PropTypes.array,
};

export default MetadataFields;
