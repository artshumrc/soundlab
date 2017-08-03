import React from 'react';
import CollectionsCover from '../../collections/CollectionsCover';
import ItemsList from '../ItemsList';

import './ItemsListPage.css';

const ItemsListPage = props => (
	<div >
		<CollectionsCover
			title="Example Project Items"
		/>
		<ItemsList />
	</div>
);


export default ItemsListPage;
