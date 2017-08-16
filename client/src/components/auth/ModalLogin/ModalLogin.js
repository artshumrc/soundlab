import React from 'react';
import PropTypes from 'prop-types';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './ModalLogin.css';


const ESCAPE_KEY = 27;


class ModalLogin extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);

		this.state = {
			errorMsg: '',
			errorSocial: '',
		};

		// methods:
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLoginFacebook = this.handleLoginFacebook.bind(this);
		this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
		this.handleLoginTwitter = this.handleLoginTwitter.bind(this);
	}

	handleLogin(email, password) {
	}

	handleLoginFacebook() {
	}

	handleLoginGoogle() {
	}

	handleLoginTwitter() {
	}

	render() {
		const { onRegisterClick } = this.props;
		const { errorSocial, errorMsg } = this.state;

		return (
			<div className="at-form">
				<div className="at-title">
					<h3>Sign In</h3>
				</div>

				<span className="error-text">
					{errorSocial}
				</span>

				<OAuthButtons
					handleFacebook={this.handleLoginFacebook}
					handleGoogle={this.handleLoginGoogle}
					handleTwitter={this.handleLoginTwitter}
				/>

				<div className="at-sep">
					<strong>OR</strong>
				</div>

				<PWDLoginForm
					login={this.handleLogin}
					errorMsg={errorMsg}
				/>

				<div className="at-signup-link">
					<p>
						Don't have an account?
						<a
							href="#"
							id="at-signUp"
							className="at-link at-signup"
							onClick={onRegisterClick}
						>
							Register.
						</a>
					</p>
				</div>
				<div className="at-resend-verification-email-link at-wrap">
					<p>
						Verification email lost? <a href="/send-again" id="at-resend-verification-email" className="at-link at-resend-verification-email">Send again.</a>
					</p>
				</div>
			</div>
		);
	}
}

export default ModalLogin;
