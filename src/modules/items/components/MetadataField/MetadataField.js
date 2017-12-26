import React from 'react';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Field, FieldArray } from 'redux-form';

import { required, maxLength } from '../../../../lib/formHelpers';
import MetadataFieldValueInput from '../MetadataFieldValueInput';

const maxLength200 = maxLength(200);
const maxLength200000 = maxLength(200000);


class MetadataField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			type: 'text',
		};
		autoBind(this);
	}

	toggleFieldType(e) {
		this.setState({
			type: e.target.options[e.target.selectedIndex].value,
		});
	}

	render() {
		const { field, index } = this.props;

		return (
			<Row key={field}>
				<Col md={2}>
					<Field
						name={`${field}.type`}
						component="select"
						onChange={this.toggleFieldType}
					>
						<option value="text">Text</option>
						<option value="number">Number</option>
						<option value="date">Date</option>
						<option value="place">Place</option>
						<option value="media">Media</option>
						<option value="relatedItem">Item</option>
					</Field>
				</Col>
				<Col md={2}>
					<Field
						name={`${field}.label`}
						type="text"
						component="input"
						placeholder="Label . . ."
						validate={[required, maxLength200]}
					/>
				</Col>
				<Col md={7}>
					<MetadataFieldValueInput field={field} type={this.state.type} />
				</Col>
				<Col md={1}>
					<button
						className="itemEditorButton itemEditorRemoveMetadata"
						onClick={this.props.handleRemove}
					>
						<i className="mdi mdi-minus" />
					</button>
				</Col>
			</Row>
		);
	}
}

export default MetadataField;
