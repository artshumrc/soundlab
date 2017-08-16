import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Field} from 'redux-form';
import './MetaEditor.css';

export default class MetaEditor extends React.Component {
	constructor(props) {
		super(props);
		this.addMeta = this.addMeta.bind(this);
	}

	addMeta() {
		this.props.meta.fields.push();
	}

	render() {
		const currentMetaData = this.props.meta.fields.length ? this.props.meta.fields : [];
		return (
			<div className="metaEditor">
				{
          currentMetaData.map((singleMeta, index) => (
	<div className="itemMetaField" key={singleMeta}>
		<Field
			name={`meta[${index}].label`}
			type="text"
			component="input"
			className="metaLabel"
      placeholder="Label..."
		/>
		<Field
			name={`meta[${index}].value`}
			type="text"
			component="input"
			className="metaValue"
      placeholder="Value..."
		/>
	</div>))
        }
				<a href="#addMeta" className="addMeta" onClick={this.addMeta}>
					<FontAwesome name="plus-circle" /> add meta data
        </a>
			</div>
		);
	}
}
