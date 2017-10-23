import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import styles from './PWDLoginForm.scss';


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
	<div className={styles.loginForm}>
		<form onSubmit={handleSubmit(wrapSubmit(login))}>
			<label>Email Address</label>
			<Field
				name="username"
				type="email"
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
				className={styles.signInButton}
				disabled={submitting}
			>
				Login
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
	form: 'PWDLoginForm',
})(PWDLoginForm);
