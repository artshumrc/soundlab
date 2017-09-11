import React from 'react';
import CollectionsCover from '../CollectionsCover';
import CollectionDescription from '../CollectionDescription';
import ItemsList from '../../../items/components/ItemsList';
import Pagination from '../../../../components/pagination/Pagination';

import './CollectionDetail.css';

const CollectionDetail = props => (
	<div >
		<CollectionsCover
			title="Example Collection: Quid faciat laetas segetes"
		/>
		<CollectionDescription />
		<ItemsList />
		<Pagination
			total={90}
			limit={18}
		/>
	</div>
);


export default CollectionDetail;
