import React from 'react';
import { Link } from 'react-router';
import Tags from '../../tags/Tags';
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
			<Tags tags={props.tags} />
		</div>
	);
}

export default CollectionListItem;
