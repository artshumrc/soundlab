import React from 'react';
import CollectionTag from '../CollectionTag';
import './CollectionTags.css';

const CollectionTags = props => (
	<div className="collectionTags">
		{props.tags.map(tag => (
			<CollectionTag
				key={tag}
				tag={tag}
			/>
		))}
	</div>
);


export default CollectionTags;
