import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import './stylesheets/Form.css';

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				{this.props.children}
				<div className="submitButton">
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}
}

Form.propTypes = {
	children: PropTypes.array.isRequired,
};

export default reduxForm()(Form);
