import React from 'react';
import PropTypes from 'prop-types';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './ModalLogin.css';

import { login } from '../../../lib/auth';


const ESCAPE_KEY = 27;


class ModalLogin extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
		setUser: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);

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
		const { onRegisterClick, setUser } = this.props;

		return (
			<div className="at-form">
				<h3 style={{color: '#000'}}>Sign In</h3>

				{/* <span className="error-text">
					{errorSocial}
				</span>

				<OAuthButtons
					handleFacebook={this.handleLoginFacebook}
					handleGoogle={this.handleLoginGoogle}
					handleTwitter={this.handleLoginTwitter}
				/>

				<div className="at-sep">
					<strong>OR</strong>
				</div> */}

				<PWDLoginForm
					submitMethod={login}
					setUser={setUser}
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
