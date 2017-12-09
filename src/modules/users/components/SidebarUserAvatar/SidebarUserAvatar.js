import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


import './SidebarUserAvatar.css';


const SidebarUserAvatar = props => (
	<div className="sidebarUserAvatar">
		<Link to="/profile">
			<div className="sidebarUserAvatarImage"
				style={{
					backgroundImage: `url('${props.avatarUrl}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div className="sidebarUserName">
				{props.username}
			</div>
		</Link>
	</div>
);

SidebarUserAvatar.propTypes = {
	username: PropTypes.string,
	avatarUrl: PropTypes.string,
};

SidebarUserAvatar.defaultProps = {
	username: 'Example User',
	avatarUrl: '/images/default_user.jpg',
};

export default SidebarUserAvatar;
