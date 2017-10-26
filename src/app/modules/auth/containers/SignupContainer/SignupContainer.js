import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';
import slugify from 'slugify';

import { userCreateMutation } from '../../graphql/auth';
import Signup from '../../components/Signup';


class SignupContainer extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	handleSignup(userData) {
		this.props.userCreate({
			user_nicename: slugify(`${userData.first_name} ${userData.last_name}`),
			display_name: `${userData.first_name} ${userData.last_name}`,
			user_email: userData.email,
			password: userData.password,
			field: userData.field,
		});
	}

	render() {
		return (
			<Signup
				handleSignup={this.handleSignup}
				onSigninClick={this.props.onSigninClick}
			/>
		);
	}
}

export default compose(
	userCreateMutation
)(SignupContainer);
