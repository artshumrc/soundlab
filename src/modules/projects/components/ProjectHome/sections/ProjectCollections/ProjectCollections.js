import React from 'react';
import { Link } from 'react-router';

import CollectionListItem from '../../../../../collections/components/CollectionListItem';
import Button from '../../../../../../components/common/buttons/Button';

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
				<div className="projectCollectionsViewMoreOuter">
					<Button
						transparentLight
						to="/collections"
						outline
					>
						View All Collections
					</Button>
				</div>
			</div>
		);
	}
}
