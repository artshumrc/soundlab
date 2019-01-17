import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import './PWDLoginForm.css';

// actions
import { toggleAuthModal, setUser } from '../../actions';

const wrapSubmit = handleLogin => async (values, dispatch) => {
	try {
		await handleLogin(values);
		return {};
	} catch (err) {
		console.error(err);
		throw new SubmissionError({ _error: 'Login failed!' });
	}
};


function renderField({ input, label, type, meta }) {
	return (
		<div className="at-input form-group has-feedback">
			<input
				{...input}
				type={type}
				style={{width: '100%'}}
				placeholder={label}
				autoCapitalize="none"
				autoCorrect="off"
				autoComplete="off"
				spellCheck="false"
			/>
			{meta.touched && meta.error && <span className="help-block">{meta.error}</span>}
		</div>
	);
}

const PWDLoginForm = ({ error, handleSubmit, pristine, reset, submitting }) => (
	<div className="loginForm">
		<form onSubmit={wrapSubmit(handleSubmit)}>
			<label>Email</label>
			<Field
				name="username"
				type="text"
				placeholder=""
				component={renderField}
			/>
			<label>Password</label>
			<Field
				name="password"
				type="password"
				placeholder=""
				component={renderField}
			/>
			<div className="at-pwd-link">
				<p className="error-text">
					{error}
				</p>
			</div>
			<button
				type="submit"
				className="signInButton"
				disabled={submitting}
			>
				Login
			</button>
		</form>
	</div>
);

PWDLoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};


export default reduxForm({
	form: 'PWDLoginForm',
})(PWDLoginForm);
