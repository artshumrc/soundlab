import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import OAuthButtons from '../OAuthButtons';
import PWDSignupForm from '../PWDSignupForm';

import './Signup.css';


class Signup extends React.Component {

	static propTypes = {
		onSigninClick: PropTypes.func.isRequired,
		onSubmit: PropTypes.func.isRequired,
	}

	render() {
		const { onSubmit, onSigninClick } = this.props;

		return (
			<div className="signupForm">
				<Row>
					<Col>
						<h3>Create an account</h3>
					</Col>
				</Row>

				<Row>
					<Col>
						<PWDSignupForm
							onSubmit={onSubmit}
						/>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<p className="loginLink">
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
