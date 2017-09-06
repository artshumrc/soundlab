import React from 'react';
import _ from 'underscore';
import ItemListItem from '../../../../../items/components/ItemListItem';

import './ProjectFeatured.css';

export default class ProjectFeatured extends React.Component {

	render() {
		return (
			<section className="projectFeatured">
				{_.range(0, 3).map((i) => {

					const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
						83, 87, 90, 92, 93, 95, 102, 103, 104, 87, 77, 92, 56, 49, 43, 38, 44, 3,
						103, 22, 71, 100, 15, 99, 36, 17, 28, 72, 32, 33, 63, 102, 62, 80, 30, 60];

					const selImage = _.sample(artImages);
					const listItem = {
						imageUrl: `//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/400,/0/default.jpg`,
						title: 'Example Item',
						tags: ['Photography', 'Bauhaus', 'De Stijl'],
						slug: 'example-item',
					};

					return (
						<ItemListItem
							key={`${listItem.slug}-${i}`}
							{...listItem}
						/>
					);
				})}
			</section>
		);
	}
}
