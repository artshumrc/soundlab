import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';

import { setUser } from '../../actions';
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

	handleLogin(userData) {
		const { dispatchSetUser } = this.props;

		this.props.userCreateToken(userData)
			.then(({ data }) => {
        console.log('got data', data);
				const { token, user_display_name }= data.userCreateToken.response;
				dispatchSetUser({
					username: user_display_name,
					token,
				});
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
	}

	render() {
		const { token } = this.state;

		return (
			<Login
				handleLogin={this.handleLogin}
				onRegisterClick={this.props.onRegisterClick}
				token={token}
			/>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username,
	userId: state.auth.userId,
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetUser: (userObject) => {
		dispatch(setUser(userObject));
	},
});

export default compose(
	userCreateTokenMutation,
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
)(LoginContainer);
