import React from 'react';
import FontAwesome from 'react-fontawesome';

import './SelectInput.css';

export default class SelectInput extends React.Component {
	render() {
		const error = this.props.meta.error && this.props.meta.touched ?
			<div className="errorBottom"><FontAwesome name="info-circle" /> {this.props.meta.error}</div> : '';
		return (
			<div className="selectInput">
				<select {...this.props.input}>
					<option selected hidden value="">Placeholder</option>
					{this.props.children}
				</select>
				{error}
			</div>
		);
	}
}
