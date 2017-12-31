import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import userInviteMutation from '../../graphql/mutations/invite';
import UserInvite from '../../components/UserInvite';


class UserInviteContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(_values) {
		const values = Object.assign({}, _values);
		const { userInvite } = this.props;

		values.recaptchaVerification = 'q4083fg1450tbgu3qv-n0u13iqrafsdvc0oqgu4ltaf';

		userInvite(values)
			.then((response) => {
				this.props.updatePostUserInvite(values);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		return (
			<UserInvite
				onSubmit={this.handleSubmit}
			/>
		);
	}
}

export default compose(
	userInviteMutation,
)(UserInviteContainer);
