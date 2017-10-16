import React from 'react';
import CollectionListItem from '../../../../modules/collections/components/CollectionListItem';
import _ from 'underscore';
import './ShowcaseCollections.css';

const ShowcaseCollections = (props) => {

	const listItems = [];

	_.range(1, 4).forEach(i => {
		const imageNumber = _.random(0, 106);

		listItems.push({
			imageUrl: `//iiif.orphe.us/orpheus/art/${imageNumber}.jpg/full/400,/0/default.jpg`,
			title: `Example Collection ${i}`,
			tags: ['Manuscripts', '12th Century'],
			slug: 'example-collection',
		});
	});

	return (
		<section className="showcaseCollections">
			<div className="parallax">
				<div className="parallax-content">
					{listItems.map((listItem, i) => (
						<CollectionListItem
							key={`${listItem.slug}-${i}`}
							{...listItem}
						/>
						))}
				</div>
			</div>
		</section>
	);
};

export default ShowcaseCollections;
