import React from 'react';
import CollectionsCover from '../CollectionsCover';
import CollectionsList from '../CollectionsList';

import './CollectionsListPage.css';

const CollectionsListPage = props => (
	<div >
		<CollectionsCover
			title="Collections"
		/>
		<CollectionsList />
	</div>
);


export default CollectionsListPage;
