import React from 'react';
import CollectionCover from '../CollectionCover';
import CollectionListContainer from '../../containers/CollectionListContainer';

import './CollectionListPage.css';

const CollectionListPage = props => (
	<div >
		<CollectionCover
			title="Collections"
			coverLink={props.userIsAdmin ? '/collections/create' : null}
			coverLinkText={props.userIsAdmin ? 'Create new' : null}
		/>
		<CollectionListContainer />
	</div>
);


export default CollectionListPage;
