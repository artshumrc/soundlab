import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import './stylesheets/TextInput.css';

export default class TextInput extends React.Component {
	render() {
		let iconRight;
		let style = this.props.icon ? 'inner-addon both-addon ' : 'textInput inner-addon right-addon ';
		const icon = this.props.icon ? <FontAwesome name={this.props.icon} className="icon" /> : '';
		const hasError = this.props.meta.touched && this.props.meta.error !== undefined;
		if (hasError) {
			style = style.concat('invalid ');
			iconRight = <FontAwesome name="times" className="addon" />;
		} else if (this.props.meta.touched) {
			style = style.concat('valid ');
			iconRight = <FontAwesome name="check" className="addon" />;
		}

		iconRight = this.props.iconRight ? <FontAwesome name={this.props.iconRight} className="iconRight" /> : iconRight;
		const label = this.props.label ? <label>{this.props.label}</label> : '';
		const error = this.props.meta.error && this.props.meta.touched ?
			<div className="errorBottom"><FontAwesome name="info-circle" /> {this.props.meta.error}</div> : '';
		return (
			<div className="textInput">
				{label}
				<div className={style}>
					{icon}
					<input
						placeholder={this.props.placeholder} 
						disabled={this.props.disabled} 
						{...this.props.input}
					/>
					{iconRight}
					{error}
				</div>
			</div>
		);
	}
}
TextInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	valid: PropTypes.bool,
	value: PropTypes.string,
	meta: PropTypes.object,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	iconRight: PropTypes.string,
	label: PropTypes.string,
  input: PropTypes.object,
};
