import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import './PWDLoginForm.css';


const wrapSubmit = login => async (values, dispatch) => {
	try {
		await login(values);
		return {};
	} catch (err) {
		throw new SubmissionError({ _error: 'Login failed!' });
	}
};

function renderField({ input, label, type, meta }) {
	return (
		<div className="at-input form-group has-feedback">
			<label className="control-label">
				{label}
			</label>
			<input
				{...input}
				type={type}
				style={{width: '100%'}}
				placeholder={label}
				autoCapitalize="none"
				autoCorrect="off"
				autoComplete="off"
				spellCheck="false"
				required
			/>
			{meta.touched && meta.error && <span className="help-block">{meta.error}</span>}
		</div>
	);
}

const PWDLoginForm = ({ error, handleSubmit, pristine, reset, submitting, login }) => (
	<div className="at-pwd-form">
		<form onSubmit={handleSubmit(wrapSubmit(login))}>
			<Field
				name="username"
				label="Username / Email"
				type="email"
				component={renderField}
			/>
			<Field
				name="password"
				label="Password"
				type="password"
				component={renderField}
			/>
			<span className="error-text">
				{error && <strong>{error}</strong>}
			</span>
			<div className="at-pwd-link">
				<p>
					<a href="/forgot-password" id="at-forgotPwd" className="at-link at-pwd">Forgot your password?</a>
				</p>
			</div>
			<button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn" disabled={submitting}>
				Sign In
			</button>
		</form>
	</div>
);

PWDLoginForm.propTypes = {
	login: PropTypes.func.isRequired,
};
PWDLoginForm.defaultProps = {
	// errorMsg: null,
};


export default reduxForm({
	form: 'PWDLoginForm',  // a unique identifier for this form
})(PWDLoginForm);
