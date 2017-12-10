import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';


import userAvatarQuery from '../../graphql/queries/avatar';
import SidebarUserAvatar from '../../components/SidebarUserAvatar';


const SidebarUserAvatarContainer = props => {
	let user;
	let userName = '';
	let avatarUrl = '/images/default_user.jpg';

	if (props.userAvatarQuery && props.userAvatarQuery.userProfile) {
		user = props.userAvatarQuery.userProfile;
		console.log('###########');
		console.log(user);
		if ('avatar' in user) {
			avatarUrl = user.avatar;
		}
		if ('name' in user) {
			userName = user.name;
		}
	}

	return (
		<SidebarUserAvatar
			avatarUrl={avatarUrl}
			name={userName}
		/>
	);
}

export default compose(
	userAvatarQuery,
)(SidebarUserAvatarContainer);
