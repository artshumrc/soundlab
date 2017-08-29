import React from 'react';
import CollectionListItem from '../../../collections/CollectionListItem';
import './ShowcaseCollections.css';

const ShowcaseCollections = (props) => {
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
	}];

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
