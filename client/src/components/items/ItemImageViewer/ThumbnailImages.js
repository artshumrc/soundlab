import React from 'react';
import _ from 'underscore';
import ThumbnailImage from 'ThumbnailImage';


const ThumbnailImages = props => (
	<div className="thumbnailImages">
		{props.images.map(image => {
			const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
				83, 87, 90, 92, 93, 95, 102, 103];
			const selImage = _.sample(artImages);

			return (
				<ThumbnailImage
					src={selImage}
				/>
			);
		})}
	</div>
);

export default ThumbnailImages;
