import React from 'react';
import autoBind from 'react-autobind';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import slugify from 'slugify';

import { changeAuthMode, setUserCreatedMessage } from '../../actions';
import { userCreateMutation } from '../../graphql/auth';
import Signup from '../../components/Signup';


class SignupContainer extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);

		this.state = {
			error: '',
		};
	}

	handleSignup(userData) {
		const { dispatchChangeAuthMode, dispatchSetUserCreatedMessage } = this.props;

		this.props.userCreate({
				user_nicename: slugify(`${userData.first_name} ${userData.last_name}`).toLowerCase(),
				display_name: `${userData.first_name} ${userData.last_name}`,
				user_email: userData.email,
				password: userData.password,
				field: userData.field,
			})
			.then(({ data }) => {
				dispatchSetUserCreatedMessage();
				dispatchChangeAuthMode('login');
      }).catch((error) => {
        console.log('there was an error sending the query', error);
				this.setState({
					error,
				});
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

const mapStateToProps = state => ({
	username: state.auth.username,
	userId: state.auth.userId,
	token: state.auth.token,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchChangeAuthMode: (mode) => {
		dispatch(changeAuthMode(mode));
	},
	dispatchSetUserCreatedMessage: (mode) => {
		dispatch(setUserCreatedMessage(mode));
	},
});

export default compose(
	userCreateMutation,
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(SignupContainer);
