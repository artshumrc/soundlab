import React from 'react';
import './Avatar.css';

const Avatar = props => (
	<img
		className="userAvatar"
		alt={props.alt}
		src={props.src}
	/>
);


export default Avatar;
