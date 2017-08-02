import React from 'react';

const BackgroundImage = props => (
	<div
		styles={{
			backgroundSize: 'cover',
			backgroundImage: props.src,
		}}
	/>
);

export default BackgroundImage;
