import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import OAuthButtons from '../OAuthButtons';
import PWDSignupForm from '../PWDSignupForm';

import styles from './Signup.scss';


class Signup extends React.Component {

	static propTypes = {
		onSigninClick: PropTypes.func.isRequired,
		signup: PropTypes.func.isRequired,
	}

	render() {
		const { signup, onSigninClick } = this.props;

		return (
			<div className={styles.signupForm}>
				<Row>
					<Col>
						<h3>Create an account</h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<PWDSignupForm
							signup={signup}
						/>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<p className={styles.loginLink}>
							<span>Already have an account? </span>
							<a
								onClick={onSigninClick}
							>
								Login.
							</a>
						</p>
					</Col>
				</Row>

			</div>
		);
	}
}

export default Signup;
