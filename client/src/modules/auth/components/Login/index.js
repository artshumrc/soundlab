import React from 'react';
import PropTypes from 'prop-types';
import hello from 'hellojs';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import './Login.css';

hello.init({
	facebook: process.env.REACT_APP_FACBOOK_APP_ID,
	twitter: 'XZlvAaYHhJhfegrU8WVZjhjas',
	google: '875421757036-r7efbv6lkn037e9hc4p8udjjimovjr0k.apps.googleusercontent.com'
}, {
	// redirect_uri: '/'
});

const _initHelloEventListeners = () => {

	hello.on('auth.login', (auth) => {

		console.log('auth.network', auth.network)

		switch(auth.network) {
			case 'facebook': {
				const facebookToken = auth.authResponse.access_token;

				console.log('facebookToken', facebookToken);

			}
			case 'google': {
				const googleToken = auth.authResponse.access_token;

				console.log('googleToken', googleToken);

			}
			case 'twitter': {
				const twitterToken = auth.authResponse.access_token;

				console.log('twitterToken', twitterToken);

			}
		}

	});

};


class Login extends React.Component {

	static propTypes = {
		onRegisterClick: PropTypes.func.isRequired,
		loginMethod: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);

		_initHelloEventListeners();
		
		this.handleLoginFacebook = this.handleLoginFacebook.bind(this);
		this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
		this.handleLoginTwitter = this.handleLoginTwitter.bind(this);
	}

	handleLoginFacebook () {
		hello('facebook').login();
	}

	handleLoginGoogle () {
		hello('google').login();
	}

	handleLoginTwitter () {
		hello('twitter').login().then(console.log.bind(console),console.error.bind(console));;
	}


	render() {
		const { onRegisterClick, loginMethod } = this.props;

		return (
			<div className="at-form">
				<h3 style={{color: '#000'}}>Sign In</h3>

				{/* <span className="error-text">
					{errorSocial}
				</span> */}

				<OAuthButtons
					handleFacebook={this.handleLoginFacebook}
					handleGoogle={this.handleLoginGoogle}
					handleTwitter={this.handleLoginTwitter}
				/>

				<div className="at-sep">
					<strong>OR</strong>
				</div>

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
