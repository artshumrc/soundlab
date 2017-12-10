import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import userAvatarQuery from '../../graphql/queries/avatar';


import Avatar from '../../components/Avatar';


const UserAvatarContainer = props => {
	let user;
	let avatarUrl = '/images/default_user.jpg';

	if (props.userDetailQuery && props.userDetailQuery.user) {
		user = props.userAvatarQuery.user;
		if ('avatar' in user) {
			avatarUrl = user.avatar;
		}
	}

	return (
		<Avatar
			avatarUrl={avatarUrl}
		/>
	);
}

export default compose(
	userAvatarQuery,
)(UserAvatarContainer);
