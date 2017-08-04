import React from 'react';
import CollectionsCover from '../CollectionsCover';
import CollectionAbout from '../CollectionAbout';
import ItemsList from '../../items/ItemsList';
import Pagination from '../../pagination/Pagination';

import './CollectionDetail.css';

const CollectionDetail = props => (
	<div >
		<CollectionsCover
			title="Example Collection: Quid faciat laetas segetes"
		/>
		<CollectionAbout />
		<ItemsList />
		<Pagination
			total={90}
			limit={18}
		/>
	</div>
);


export default CollectionDetail;
