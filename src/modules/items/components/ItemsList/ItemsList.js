import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import NoResults from '../../../../components/pagination/NoResults';
import ItemListItem from '../ItemListItem';

import './ItemsList.css';


const ItemsList = ({ items, horizontal }) => {
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


	if (horizontal) {
		classes.push('itemsListHorizontal');
	}

	return (
		<div className={`itemsList ${classes.join(' ')}`}>
			{items.map((listItem, i) => (
				<ItemListItem
					key={`${listItem.slug}-${i}`}
					{...listItem}
				/>
			))}

			{!items || !items.length ?
				<NoResults
					message="No items have been added to this collection yet."
				/>
			: ''}
		</div>
	);
};

ItemsList.propTypes = {
	items: PropTypes.array,
};

ItemsList.defaultProps = {
	items: [],
};

export default ItemsList;
