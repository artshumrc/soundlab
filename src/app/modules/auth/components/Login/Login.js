import React from 'react';
import PropTypes from 'prop-types';
import hello from 'hellojs';

import OAuthButtons from '../OAuthButtons';
import PWDLoginForm from '../PWDLoginForm';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import styles from './Login.scss';

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

	render() {
		const { login, onRegisterClick } = this.props;

		return (
			<div className={styles.loginForm}>
			<Row>
				<Col smOffset={3} mdOffset={4} lgOffset={4} xs={12} sm={6} md={4} lg={4}>
					<h3>Login to an existing account</h3>
				</Col>
			</Row>

				{/* <OAuthButtons
					login={login}
				/>

				<div className={styles.loginSeparator}>
					<strong>OR</strong>
				</div> */}
				<Row>
					<Col smOffset={3} mdOffset={4} lgOffset={4} xs={12} sm={6} md={4} lg={4}>
						<PWDLoginForm
							login={login}
						/>
					</Col>
				</Row>

				<Row>
					<Col smOffset={3} mdOffset={4} lgOffset={4} xs={12} sm={6} md={4} lg={4}>
					<div className={styles.signupLink}>
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
					<div className={styles.verificationEmailLink}>
						<p>
							Verification email lost? <a href="/send-again" id="at-resend-verification-email" className="at-link at-resend-verification-email">Send again.</a>
						</p>
					</div>
					</Col>
				</Row>

			</div>
		);
	}
}

export default Login;
