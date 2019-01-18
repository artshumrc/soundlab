import React from 'react';
import PropTypes from 'prop-types';
import hello from 'hellojs';
import { Row, Col } from 'react-bootstrap';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './Login.css';



class Login extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
		onSubmit: PropTypes.func.isRequired,
	}

	render() {
		const { onSubmit, onRegisterClick } = this.props;

		return (
			<div className="loginForm">
				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<h3>Login to an existing account</h3>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<PWDLoginForm
							onSubmit={onSubmit}
						/>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<p className="signupLink">
							<a
								href="//admin.soundlab.orphe.us/wp-login.php?action=lostpassword"
							>
								Forgot Password?
							</a>
							<span>or</span>
							<a
								onClick={onRegisterClick}
							>
								Create Account
							</a>
						</p>
					</Col>
				</Row>

			</div>
		);
	}
}

export default Login;
