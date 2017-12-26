import React from 'react';
import ItemList from '../ItemList';
import './ItemCollection.css';

const ItemCollection = props => (
	<div className="itemCollection">
		<h4>Related Objects in the collection</h4>
		<ItemList horizontal />
	</div>
);

export default ItemCollection;
