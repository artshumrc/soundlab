import React from 'react';
import CollectionListItem from '../../../../../collections/components/CollectionListItem';
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
			<h2>Explore Recent Collections</h2>
			<hr />
			<div className="showcaseCollectionsInner">
				{listItems.map((listItem, i) => (
					<CollectionListItem
						key={`${listItem.slug}-${i}`}
						{...listItem}
					/>
					))}
			</div>
		</section>
	);
};

export default ShowcaseCollections;
