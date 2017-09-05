import React from 'react';
import _ from 'underscore';

import './ItemsList.css';

import ItemListItem from '../ItemListItem';

const ItemsList = (props) => {
	const listItems = [];
	const classes = [];
	const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
		83, 87, 90, 92, 93, 95, 102, 103, 104, 87, 77, 92, 56, 49, 43, 38, 44, 3,
		103, 22, 71, 100, 15, 99, 36, 17, 28, 72, 32, 33, 63, 102, 62, 80, 30, 60];

	_.range(0, 18).map(i => { // eslint-disable-line
		const selImage = _.sample(artImages);
		listItems.push({
			imageUrl: `//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/400,/0/default.jpg`,
			title: 'Example Item',
			tags: ['Photography', 'Bauhaus', 'De Stijl'],
			slug: 'example-item',
		});
	});


	if (props.horizontal) {
		classes.push('itemsListHorizontal');
	}

	return (
		<div className={`itemsList ${classes.join(' ')}`}>
			{listItems.map((listItem, i) => (
				<ItemListItem
					key={`${listItem.slug}-${i}`}
					{...listItem}
				/>
			))}
		</div>
	);
};


export default ItemsList;
