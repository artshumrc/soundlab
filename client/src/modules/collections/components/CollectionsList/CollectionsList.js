import React from 'react';

import CollectionListItem from '../CollectionListItem';

import './CollectionsList.css';

const CollectionsList = (props) => {
	const listItems = [{
		imageUrl: '//iiif.orphe.us/orpheus/art/64.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}, {
		imageUrl: '//iiif.orphe.us/orpheus/art/77.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}, {
		imageUrl: '//iiif.orphe.us/orpheus/art/22.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}, {
		imageUrl: '//iiif.orphe.us/orpheus/art/19.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}, {
		imageUrl: '//iiif.orphe.us/orpheus/art/3.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}, {
		imageUrl: '//iiif.orphe.us/orpheus/art/91.jpg/full/400,/0/default.jpg',
		title: 'Example Collection',
		tags: ['Manuscripts', '12th Century'],
		slug: 'example-collection',
	}];

	return (
		<div className="collectionsList">
			{listItems.map((listItem, i) => (
				<CollectionListItem
					key={`${listItem.slug}-${i}`}
					{...listItem}
				/>
			))}
		</div>
	);
};

export default CollectionsList;
