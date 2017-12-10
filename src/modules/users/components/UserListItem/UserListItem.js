import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const UserListItem = ({ username, avatarUrl }) => (
	<div className="userListItem">
		<Link to="/profile">
			<div className="userListItemAvatarImage"
				style={{
					backgroundImage: `url('${avatarUrl}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div className="userListItemUserName">
				{username}
			</div>
		</Link>
	</div>
);

UserListItem.propTypes = {
	username: PropTypes.string,
	avatarUrl: PropTypes.string,
};

UserListItem.defaultProps = {
	username: 'Example User',
	avatarUrl: '/images/default_user.jpg',
};

export default UserListItem;
