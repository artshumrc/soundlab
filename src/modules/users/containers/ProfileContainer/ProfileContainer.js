import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import Profile from '../../components/Profile';
import profileQuery from '../../graphql/queries/profile';
import profileMutation from '../../graphql/mutations/profile';


class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { userUpdate, router } = this.props;

		delete values.__typename;

		userUpdate(values)
			.then((response) => {
				router.replace('/profile');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		let profile;

		if (this.props.userProfileQuery && !this.props.userProfileQuery.loading) {
			profile = this.props.userProfileQuery.userProfile;
		}

		return (
			<Profile
				onSubmit={this.handleSubmit}
				initialValues={profile}
			/>
		);
	}
}

export default compose(
	profileMutation, profileQuery,
)(ProfileContainer);
