import React from 'react';
import PropTypes from 'prop-types';


import ItemListItem from '../../../../../items/components/ItemListItem';

import './ProjectFeatured.css';


const ProjectFeatured = ({ items }) => {
	let featuredItems = [];

	if (items) {
		featuredItems = items;
	}

	return (
		<section className="projectFeatured">
			{featuredItems.map((item, i) => {
				const imageUrl = `//iiif.orphe.us/orpheus/art/${item.path}.jpg/full/400,/0/default.jpg`;

				return (
					<ItemListItem
						key={`${item.slug}-${i}`}
						{...item}
						imageUrl={imageUrl}
					/>
				);
			})}
		</section>
	);
}

ProjectFeatured.propTypes = {
	items: PropTypes.array,
};

ProjectFeatured.defaultProps = {
	items: [],
};


export default ProjectFeatured;
