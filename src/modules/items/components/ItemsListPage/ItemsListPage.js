import React from 'react';
import CollectionCover from '../../../collections/components/CollectionCover';
import ItemsList from '../ItemsList';
import Pagination from '../../../../components/pagination/Pagination';

import './ItemsListPage.css';

const ItemsListPage = props => (
	<div >
		<CollectionCover
			title="Example Project Items"
		/>
		<ItemsList />
		<Pagination
			total={90}
			limit={18}
		/>
	</div>
);


export default ItemsListPage;
