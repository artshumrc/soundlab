import React from 'react';
import CollectionsCover from '../../../collections/components/CollectionsCover';
import ItemsList from '../ItemsList';
import Pagination from '../../../../components/pagination/Pagination';

import './ItemsListPage.css';

const ItemsListPage = props => (
	<div >
		<CollectionsCover
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
