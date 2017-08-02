import React from 'react';
import './Avatar.css';

const Avatar = props => (
	<img
		className="userAvatar"
		alt={props.alt}
		src={`//iiif.orphe.us/orpheus/${props.src}/full/full/0/default.jpg`}
	/>
);


export default Avatar;
