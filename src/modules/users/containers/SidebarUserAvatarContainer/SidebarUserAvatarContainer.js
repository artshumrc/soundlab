import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';


import SidebarUserAvatar from '../../components/SidebarUserAvatar';


const SidebarUserAvatarContainer = props => (
	<SidebarUserAvatar
		user={props.user}
	/>
);

export default SidebarUserAvatarContainer;
