import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = props => (
	<div
		className="backgroundImage"
		style={{
			backgroundSize: 'cover',
			backgroundImage: `url(${props.src})`,
		}}
	/>
);

export default BackgroundImage;
