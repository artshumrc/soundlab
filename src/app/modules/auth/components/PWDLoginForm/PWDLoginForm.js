import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import styles from './PWDLoginForm.scss';

// actions
import { toggleAuthModal, setUser } from '../../actions';

const wrapSubmit = handleLogin => async (values, dispatch) => {
	try {
		await handleLogin(values);
		return {};
	} catch (err) {
		throw new SubmissionError({ _error: 'Login failed!' });
	}
};

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength100 = maxLength(100)

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

const PWDLoginForm = ({ error, handleSubmit, pristine, reset, submitting, handleLogin }) => (
	<div className={styles.loginForm}>
		<form onSubmit={handleSubmit(wrapSubmit(handleLogin))}>
			<label>Username</label>
			<Field
				name="username"
				type="text"
				placeholder=""
				component={renderField}
				validate={[required, maxLength100]}
			/>
			<label>Password</label>
			<Field
				name="password"
				type="password"
				placeholder=""
				component={renderField}
				validate={[required, maxLength100]}
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
	handleLogin: PropTypes.func.isRequired,
};
PWDLoginForm.defaultProps = {
	// errorMsg: null,
};


export default reduxForm({
	form: 'PWDLoginForm',
})(PWDLoginForm);
