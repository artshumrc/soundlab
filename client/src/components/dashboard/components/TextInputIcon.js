import React from 'react';
import {FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './stylesheets/TextInputIcon.css';

export default class TextInputIcon extends React.Component {
	render() {
		return (
			<div className="textInputIconWrapper">
				<FormGroup className="textInputIcon">
					<InputGroup>
						<InputGroup.Addon>
							<FontAwesome name={this.props.icon} />
						</InputGroup.Addon>
						<FormControl
							type="text" placeholder={this.props.placeholder} value={this.props.value}
							onChange={this.props.changeCb}
						/>
					</InputGroup>
				</FormGroup>
			</div>
		);
	}
}
TextInputIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	value: PropTypes.string,
	changeCb: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired
};
TextInputIcon.defaultProps = {
	value: ''
};
