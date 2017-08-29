import React from 'react';
import _ from 'underscore';
import PrimaryImage from './PrimaryImage';
import ThumbnailImages from './ThumbnailImages';
import './ItemImageViewer.css';

const ItemImageViewer = (props) => {

	const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
		83, 87, 90, 92, 93, 95, 102, 103];
	const selImage = _.sample(artImages);

	return (
		<div className="itemImageViewer">
			<PrimaryImage
				alt={props.title}
				src={`//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/600,/0/default.jpg`}
			/>
			<ThumbnailImages
				images={_.range(0, 4)}
			/>
		</div>
	);
};

export default ItemImageViewer;
