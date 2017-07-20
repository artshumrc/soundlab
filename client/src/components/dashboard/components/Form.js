import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				{this.props.children}
				<button type="submit">Submit</button>
			</form>
		);
	}
}

Form.propTypes = {
	children: PropTypes.array.isRequired,
};

export default reduxForm()(Form);
