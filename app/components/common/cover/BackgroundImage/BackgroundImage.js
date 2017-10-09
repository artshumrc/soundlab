import React from 'react';
import styles from './BackgroundImage.scss';

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
