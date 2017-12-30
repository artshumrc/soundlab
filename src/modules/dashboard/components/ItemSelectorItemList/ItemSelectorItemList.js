import React from 'react';
import PropTypes from 'prop-types';


import ItemSelectorItemListItem from '../ItemSelectorItemListItem';

import './ItemSelectorItemList.css';


const ItemSelectorItemList = ({
	showSelected, items, selectedItems, toggleSelectedItem
}) => {
	let _items = items.slice();

	// if show selected prop set,
	// show the selected items array sent
	if (showSelected) {
		_items = selectedItems;

	// otherwise, don't show the items that are common between lists
	} else {
		_items.forEach(item => {
			selectedItems.forEach(selectedItem => {
				if (item._id === selectedItem._id) {
					_items.splice(
						_items.findIndex( _i => _i._id === item._id),
						1
					);
				}
			});
		});
	}

	return (
		<div className="itemSelectorItemList">
			{_items.map((listItem, i) => (
				<ItemSelectorItemListItem
					key={`${listItem.slug}-${i}`}
					toggleSelectedItem={toggleSelectedItem}
					{...listItem}
				/>
			))}
		</div>
	);
};

ItemSelectorItemList.propTypes = {
	showSelected: PropTypes.bool,
	items: PropTypes.array,
	selectedItems: PropTypes.array,
	toggleSelectedItem: PropTypes.func,
};

ItemSelectorItemList.defaultProps = {
	items: [],
	selectedItems: [],
};

export default ItemSelectorItemList;
