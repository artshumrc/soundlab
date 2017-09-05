import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Tags from '../../tags/Tags';
import './CollectionListItem.css';

const CollectionListItem = (props) => {
	const collectionUrl = `/collections/${props.slug}`;

	return (
		<div className="collectionListItem">
			<Link to={collectionUrl}>
				<img alt={props.title} src={props.imageUrl} />
			</Link>
			<Link to={collectionUrl}>
				<h3>{props.title}</h3>
			</Link>
			<Tags tags={props.tags} />
		</div>
	);
};

CollectionListItem.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired
};

export default CollectionListItem;
