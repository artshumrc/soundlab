import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import styles from './PWDSignupForm.scss';

// actions
import { toggleAuthModal, setUser } from '../../actions';


const wrapSubmit = signup => async (values, dispatch) => {
	try {
		const userObj = await signup(values);
		dispatch(setUser(userObj));
		dispatch(toggleAuthModal(false));
		return {};
	} catch (err) {
		if (err.passwordError) {
			throw new SubmissionError({ _error: `Password too weak: ${err.suggestion}` });
		}
		throw new SubmissionError({ _error: 'Registration failed!' });
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

const PWDSignupForm = ({ error, handleSubmit, pristine, reset, submitting, signup }) => (
	<Row className={styles.signupForm}>
		<form onSubmit={handleSubmit(wrapSubmit(signup))}>
			<Row>
				<Col md={6}>
					<label>First Name</label>
					<Field
						name="first_name"
						type="text"
						placeholder=""
						component={renderField}
					/>
					<label>Harvard Email Address</label>
					<Field
						name="email"
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
				</Col>
				<Col md={6}>
					<label>Last Name</label>
					<Field
						name="last_name"
						type="text"
						placeholder=""
						component={renderField}
					/>
					<label>Field of Study</label>
					<Field
						name="field"
						type="text"
						placeholder=""
						component={renderField}
					/>
					<label>Confirm Password</label>
					<Field
						name="confirm_password"
						type="password"
						placeholder=""
						component={renderField}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
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
						Create account
					</button>
				</Col>
			</Row>
		</form>
	</Row>
);

PWDSignupForm.propTypes = {
	signup: PropTypes.func.isRequired,
};

const validate = (values) => {
	const errors = {};

	if (values.password !== values.passwordRepeat) {
		errors.passwordRepeat = 'Passwords do not match';
	}

	return errors;
};

export default reduxForm({
	form: 'PWDSignupForm',
	validate,
})(PWDSignupForm);
