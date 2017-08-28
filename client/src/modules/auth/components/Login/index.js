import React from 'react';
import PropTypes from 'prop-types';
import hello from 'hellojs';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './Login.css';

hello.init({
	facebook: process.env.REACT_APP_FACBOOK_CLIENT_ID,
	twitter: process.env.REACT_APP_TWITTER_CLIENT_ID,
	google: process.env.REACT_APP_GOOGLE_CLIENT_ID
}, {
	// redirect_uri: '/',
	oauth_proxy: `${process.env.REACT_APP_SERVER}/oauthproxy`,
});



class Login extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
		login: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		
		this.handleLoginFacebook = this.handleLoginFacebook.bind(this);
		this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
		this.handleLoginTwitter = this.handleLoginTwitter.bind(this);
	}

	async handleLoginFacebook () {
		try {
			const auth = await hello('facebook').login();

			console.log('auth.network', auth.network);

			console.log('auth.authResponse.access_token', auth.authResponse.access_token);

			// try {
			// 	const userObj = await login(values);
			// 	dispatch(setUser(userObj));
			// 	dispatch(toggleAuthModal(false));
			// 	return {};
			// } catch (err) {
			// 	throw new SubmissionError({ _error: 'Login failed!' });
			// }
		} catch (err) {
			console.log(err);
		}
	}

	handleLoginGoogle () {
		hello('google').login();
	}

	handleLoginTwitter () {
		hello('twitter').login();
	}


	render() {
		const { onRegisterClick, login } = this.props;

		return (
			<div className="at-form">
				<h3 style={{color: '#000'}}>Sign In</h3>

				{/* <span className="error-text">
					{errorSocial}
				</span> */}

				<OAuthButtons
					login={login}
				/>

				<div className="at-sep">
					<strong>OR</strong>
				</div>

				<PWDLoginForm
					login={login}
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
