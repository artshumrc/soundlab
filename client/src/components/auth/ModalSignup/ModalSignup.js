import React from 'react';

import OAuthButtons from '../OAuthButtons';
import PWDSignupForm from '../PWDSignupForm';

const ESCAPE_KEY = 27;


class ModalSignup extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			errorMsg: '',
			errorSocial: '',
		};

		// methids
		this.handleSignup = this.handleSignup.bind(this);
		this.handleSignupFacebook = this.handleSignupFacebook.bind(this);
		this.handleSignupGoogle = this.handleSignupGoogle.bind(this);
		this.handleSignupTwitter = this.handleSignupTwitter.bind(this);
	}

	handleSignup(email, password, passwordRepeat) {

		if (password !== passwordRepeat) {
			// TODO handle error
		}
	}

	handleSignupFacebook() {
	}

	handleSignupGoogle() {
	}

	handleSignupTwitter() {
	}

	render() {
		const { errorMsg, errorSocial } = this.state;

		return (
			<div className="at-form">
				<div className="at-title">
					<h3>Create an Account</h3>
				</div>
				<span className="error-text">
					{errorSocial}
				</span>
				<OAuthButtons
					handleFacebook={this.handleSignupFacebook}
					handleGoogle={this.handleSignupGoogle}
					handleTwitter={this.handleSignupTwitter}
				/>
				<div className="at-sep">
					<strong>OR</strong>
				</div>

				<PWDSignupForm
					handleSignup={this.handleSignup}
					errorMsg={errorMsg}
				/>

				<div className="at-signup-link">
					<div className="at-resend-verification-email-link at-wrap">
						<p>
							By clicking register, you agree to our <a href="/terms" className="at-link at-link--terms at-resend-verification-email">Terms and Privacy Policy.</a>
						</p>
					</div>
					<p>
						Already have an account? <a href="/sign-in" id="at-signUp" className="at-link at-signup">Sign in.</a>
					</p>
				</div>
			</div>
		);
	}
}

export default ModalSignup;
