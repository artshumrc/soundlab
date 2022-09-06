import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';

import { toggleAuthModal, setUser, setFormMessage } from '../../actions';
import { userCreateTokenMutation } from '../../graphql/auth';
import Login from '../../components/Login';


class LoginContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			token: '',
		};

		autoBind(this);
	}

	async handleLogin(userData) {
		const { dispatchSetUser, dispatchToggleAuthModal, dispatchSetFormMessage, dispatchNavigateToHome } = this.props;

		this.props.userCreateToken(userData)
			.then(async ({ data }) => {
				const { token, user_display_name } = data.userCreateToken.response;
				if (!token) {
					dispatchSetFormMessage('Username or password incorrect.');
					return null;
				}

				await dispatchSetUser({
					username: user_display_name,
					token,
				});

				dispatchToggleAuthModal(false);
				dispatchSetFormMessage('Login successful!');
				dispatchNavigateToHome();
				Cookies.set('token', token);
			}).catch((error) => {
				dispatchSetFormMessage('Username or password incorrect.');
			});
	}

	render() {
		const { token } = this.state;

		return (
			<Login
				onSubmit={this.handleLogin.bind(this)}
				onRegisterClick={this.props.onRegisterClick}
				token={token}
			/>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username,
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetUser: (userObject) => {
		dispatch(setUser(userObject));
	},
	dispatchToggleAuthModal: (onOff) => {
		dispatch(toggleAuthModal(onOff));
	},
	dispatchSetFormMessage: (formMessage) => {
		dispatch(setFormMessage(formMessage));
	},
	dispatchNavigateToHome: () => {
		dispatch(push('/'));
	},
});

export default compose(
	userCreateTokenMutation,
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
)(LoginContainer);
