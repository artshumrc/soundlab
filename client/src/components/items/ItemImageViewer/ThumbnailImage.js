import React from 'react';
import './ThumbnailImage.css';


const ThumbnailImage = props => (
	<img
		className="thumbnailImage"
		src={props.src}
	/>
);

export default ThumbnailImage;
