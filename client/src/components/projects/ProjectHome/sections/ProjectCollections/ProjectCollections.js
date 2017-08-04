import React from 'react';
import CollectionListItem from '../../../../collections/CollectionListItem';

import './ProjectCollections.css';

export default class ProjectCollections extends React.Component {
	render() {
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
			<div className="projectCollections">
				<h2>Collections</h2>
				{listItems.map((listItem, i) => (
					<CollectionListItem
						key={`${listItem.slug}-${i}`}
						{...listItem}
					/>
				))}
			</div>
		);
	}
}
