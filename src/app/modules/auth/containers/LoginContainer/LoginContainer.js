import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';

import { userCreateTokenMutation } from '../../graphql/auth';
import Login from '../../components/Login';


class LoginContainer extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	handleLogin(userData) {
		this.props.userCreateToken(userData);
	}

	render() {
		console.log("###########################################");
		console.log("user login container props");
		console.log(this.props);
		console.log("###########################################");

		return (
			<Login
				handleLogin={this.handleLogin}
				onRegisterClick={this.props.onRegisterClick}
			/>
		);
	}
}

export default compose(
	userCreateTokenMutation
)(LoginContainer);
