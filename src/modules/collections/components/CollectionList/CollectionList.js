import React from 'react';
import PropTypes from 'prop-types';

import CollectionListItem from '../CollectionListItem';

import './CollectionList.css';


const CollectionList = props => (
	<div className="collectionsList">
		{props.collections.map((listItem, i) => (
			<CollectionListItem
				key={`${listItem.slug}-${i}`}
				{...listItem}
			/>
		))}
	</div>
);

CollectionList.propTypes = {
	collections: PropTypes.array,
};

CollectionList.defaultProps = {
	collections: [],
};

export default CollectionList;
