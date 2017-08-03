import React from 'react';
import ItemsList from '../ItemsList';
import './ItemCollection.css';

const ItemCollection = props => (
	<div className="itemCollection">
		<h4>Related Objects in the collection</h4>
		<ItemsList horizontal />
	</div>
);

export default ItemCollection;
