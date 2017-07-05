import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import './stylesheets/TextInput.css';

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let iconRight;
		let style = this.props.icon ? 'inner-addon both-addon ' : 'textInput inner-addon right-addon ';
		const icon = this.props.icon ? <FontAwesome name={this.props.icon} className="icon" /> : '';
		if (this.props.valid !== undefined) {
			if (this.props.valid) {
				style = style.concat('valid ');
				iconRight = <FontAwesome name="check" className="addon" />;
			} else {
				style = style.concat('invalid ');
				iconRight = <FontAwesome name="times" className="addon" />;
			}
		}
		iconRight = this.props.iconRight ? <FontAwesome name={this.props.iconRight} className="iconRight" /> : iconRight;
		const label = this.props.label ? <label>{this.props.label}</label> : '';
		const required = this.props.required ?
			<div className="required"><FontAwesome name="info-circle" /> This is required value</div> : '';

		return (
			<div className="textInput">
				{label}
				<div className={style}>
					{icon}
					<input placeholder={this.props.placeholder} value={this.props.value} disabled={this.props.disabled} />
					{iconRight}
					{required}
				</div>
			</div>
		);
	}
}
TextInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	valid: PropTypes.bool,
	value: PropTypes.string
};
