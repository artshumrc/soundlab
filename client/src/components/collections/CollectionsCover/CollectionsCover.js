import React from 'react'
import Button from '../../../common/buttons/Button';
import Cover from '../../../common/cover/Cover';
import CoverTitle from '../../../common/cover/CoverTitle';
import BackgroundImage from '../../../common/cover/BackgroundImage';
import { Bricks } from '../../../common/cover/Bricks';
import Util from '../../../../lib/util';


class CollectionsCover extends React.Component {

	render() {

		return (
			<Cover
				className="home-cover"
				background={
					<BackgroundImage
						src="//iiif.orphe.us/orpheus/art/7.jpg/full/1400,/0/default.jpg"
					/>
				}
			>
				<CoverTitle
					title="Example Collection: Quid Faciat Laetas Segetes"
				/>
			</Cover>
		)
	}
}


export default HomeCover;
