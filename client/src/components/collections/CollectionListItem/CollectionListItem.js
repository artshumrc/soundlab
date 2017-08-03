import React from 'react';
import { Link } from 'react-router';
import CollectionTags from '../CollectionTags';
import './CollectionListItem.css';

const CollectionListItem = props => {
	const collectionUrl = `/collections/${props.slug}`;

	return (
		<div className="collectionListItem">
			<Link to={collectionUrl}>
				<img src={props.imageUrl} />
			</Link>
			<Link to={collectionUrl}>
				<h3>{props.title}</h3>
			</Link>
			<CollectionTags tags={props.tags} />
		</div>
	);
}

export default CollectionListItem;
