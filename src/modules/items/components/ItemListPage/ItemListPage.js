import React from 'react';

import ItemListContainer from '../../containers/ItemListContainer';
import SearchFilter from '../SearchFilter';
import SearchHead from '../SearchHead';

import './ItemListPage.css';



const ItemListPage = ({ textsearch, tags, filter, skip }) => (
	<div className="itemListPage">
		<SearchHead />

		<div className="searchOuter">
			<SearchFilter />

			<ItemListContainer
				textsearch={textsearch}
				tags={tags}
				skip={skip}
			/>
		</div>
	</div>
);


export default ItemListPage;
