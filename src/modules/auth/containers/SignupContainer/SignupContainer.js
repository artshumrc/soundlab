import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import slugify from 'slugify';

import { changeAuthMode, setFormMessage } from '../../actions';
import { userCreateMutation } from '../../graphql/auth';
import Signup from '../../components/Signup';


class SignupContainer extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	async handleSignup(userData) {
		const { dispatchChangeAuthMode, dispatchSetFormMessage } = this.props;

		if (userData.password !== userData.confirm_password) {
			dispatchSetFormMessage('Password and confirm password fields do not match.');
			return false;
		}

		await this.props.userCreate({
			user_nicename: slugify(`${userData.first_name} ${userData.last_name}`).toLowerCase(),
			display_name: `${userData.first_name} ${userData.last_name}`,
			user_email: userData.email,
			password: userData.password,
			field: userData.field,
		})
			.then(({ data }) => {
				dispatchSetFormMessage('Signup successful! Please log in.');
				dispatchChangeAuthMode('login');
			}).catch((error) => {
				dispatchSetFormMessage('There is already a user registered with that name or email. Please try again.');
				// console.error(error);
			});
	}

	render() {
		return (
			<Signup
				onSubmit={this.handleSignup.bind(this)}
				onSigninClick={this.props.onSigninClick}
			/>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.username,
	token: state.auth.token,
	token: state.auth.token,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispatchSetFormMessage: (mode) => {
		dispatch(setFormMessage(mode));
	},
});

export default compose(
	userCreateMutation,
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(SignupContainer);
