import React from 'react'
import _ from 'underscore';
import Cover from '../../common/cover/Cover';
import CoverTitle from '../../common/cover/CoverTitle';
import BackgroundImage from '../../common/cover/BackgroundImage';

const CollectionsCover = props => {
	const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
		83, 87, 90, 92, 93, 95, 102, 103];
	const selImage = _.sample(artImages);

	return (
		<Cover
			className="collections-cover"
			background={
				<BackgroundImage
					src={`//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/1400,/0/default.jpg`}
				/>
			}
			bottom
		>
			<CoverTitle
				title={props.title}
			/>
		</Cover>
	);
}


export default CollectionsCover;
