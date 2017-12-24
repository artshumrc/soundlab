import React from 'react';
import CollectionCover from '../CollectionCover';
import CollectionListContainer from '../../containers/CollectionListContainer';

import './CollectionListPage.css';

const CollectionListPage = props => (
	<div >
		<CollectionCover
			title="Collections"
			createLink={false}
		/>
		<CollectionListContainer />
	</div>
);


export default CollectionListPage;
