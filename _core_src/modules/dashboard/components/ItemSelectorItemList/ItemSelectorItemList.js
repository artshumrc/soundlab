import React from 'react';
import PropTypes from 'prop-types';


import ItemSelectorItemListItem from '../ItemSelectorItemListItem';
import ItemSelectorItemListItemContainer from '../../containers/ItemSelectorItemListItemContainer';

import './ItemSelectorItemList.css';


const ItemSelectorItemList = ({ items, toggleSelectedItem }) => {
	return (
		<div className="itemSelectorItemList">
			{items.map((listItem, i) => {
				// handle error with null values being saved to items array
				if (!listItem) {
					return null;
				}

				if (typeof listItem === 'string') {
					return (
						<ItemSelectorItemListItemContainer
							key={`${listItem.slug}-${i}`}
							toggleSelectedItem={toggleSelectedItem}
							_id={listItem}
						/>
					)
				}

				return (
					<ItemSelectorItemListItem
						key={`${listItem.slug}-${i}`}
						toggleSelectedItem={toggleSelectedItem}
						{...listItem}
					/>
				)
			})}
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
