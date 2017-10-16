import React from 'react';
import './ThumbnailImage.css';


const ThumbnailImage = props => (
	<img
		className="thumbnailImage"
		alt={props.alt}
		src={props.src}
	/>
);

export default ThumbnailImage;
