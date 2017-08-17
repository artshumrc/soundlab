import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import './stylesheets/Form.css';

class Form extends React.Component {
	render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        changeValue: this.props.change
      })
    );
    return (
			<form onSubmit={this.props.handleSubmit}>
				{childrenWithProps}
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
