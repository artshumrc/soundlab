import React from 'react';
import PropTypes from 'prop-types';

// import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './Login.css';

class Login extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
		loginMethod: PropTypes.func.isRequired,
	}

	render() {
		const { onRegisterClick, loginMethod } = this.props;

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
					loginMethod={loginMethod}
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

export default Login;
