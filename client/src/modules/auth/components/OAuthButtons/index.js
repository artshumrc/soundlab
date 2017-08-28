import React from 'react';
import hello from 'hellojs';

import './OAuthButtons.css';


class OAuthButtons extends React.Component {

	constructor(props) {
		super(props);

		this.socialTypes = ['facebook', 'google', 'twitter'];
		
		this.state = {
			disabledButton: null,
		};

		this.OAuthButton = this.OAuthButton.bind(this);
	}

	async handleLogin(type) {
		const { login } = this.props;

		try {
			const auth = await hello(type).login();


			console.log('auth', auth)

			console.log('auth.network', auth.network);

			console.log('auth.authResponse.access_token', auth.authResponse.access_token);

			const odp = await login({ network: auth.network, accessToken: auth.authResponse.access_token });

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

	OAuthButton({ type }) {
		const { disabledButton } = this.state;

		return (
			<button
				className="btn at-social-btn"
				id={`at-${type}`}
				name={type}
				onClick={this.handleLogin.bind(this, type)}
				disabled={disabledButton === type}
			>
				<i className={`fa fa-${type}`} /> Sign In with {type}
			</button>);
	}

	render() {

		return (
			<div className="at-oauth">
				{this.socialTypes.map(social => <this.OAuthButton key={social} type={social} />)}
			</div>);
	}
}

OAuthButtons.propTypes = {
	login: React.PropTypes.func.isRequired,
};

export default OAuthButtons;
