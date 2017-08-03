import React from 'react';
import { Link } from 'react-router';
import './CollectionTag.css';

const CollectionTags = props => (
	<Link to={`/search/?tag=${props.tag}`}>
		<span className="collectionTag">
			{props.tag}
		</span>
	</Link>
);


export default CollectionTags;
