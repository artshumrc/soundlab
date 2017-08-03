import React from 'react'
import Cover from '../../common/cover/Cover';
import CoverTitle from '../../common/cover/CoverTitle';
import BackgroundImage from '../../common/cover/BackgroundImage';


const CollectionsCover = props => (
	<Cover
		className="collections-cover"
		background={
			<BackgroundImage
				src="//iiif.orphe.us/orpheus/art/43.jpg/full/1400,/0/default.jpg"
			/>
		}
		bottom
	>
		<CoverTitle
			title={props.title}
		/>
	</Cover>
)


export default CollectionsCover;
