import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import faker from 'faker';
import _ from 'underscore';
import { truncate } from 'underscore.string';

import Tags from '../../../tags/components/Tags';
import './CollectionListItem.css';

const CollectionListItem = (props) => {
	const collectionUrl = `/collections/${props.slug}`;
	const collectionCount = _.random(25, 999);

	return (
		<div className="collectionListItem">
			<div className="collectionListItemImage">
				<Link to={collectionUrl}>
					<img alt={props.title} src={props.imageUrl} />
				</Link>
			</div>
			<div className="collectionListItemBackground">
				<div className="collectionCount">
					{collectionCount} items
				</div>
				<Link to={collectionUrl}>
					<h3>{props.title}</h3>
				</Link>
				<p>
					{truncate(faker.lorem.sentences(), 120)}
				</p>
				<Link
					to={collectionUrl}
					className="collectionLink"
				>
					<span className="collectionLinkLabel">
						View the collection
					</span>
					<i className="collectionLinkIcon mdi mdi-chevron-right" />
				</Link>
			</div>
		</div>
	);
};

CollectionListItem.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
};

export default CollectionListItem;
