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
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<h3>Login to an existing account</h3>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<PWDLoginForm
							login={login}
						/>
					</Col>
				</Row>

				<Row>
					<Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
						<p className={styles.signupLink}>
							<a
								onClick={() => {}}
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
