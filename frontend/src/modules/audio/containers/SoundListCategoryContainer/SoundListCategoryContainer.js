import React from 'react'
import { compose } from 'react-apollo';

import SoundList from '../../components/SoundList';
import { soundListCategoryQuery } from '../../graphql/queries/sounds';


const SoundListCategoryContainer = props => {
	let sounds = [];

	if (props.category) {
		sounds = props.category.posts;
	}

	return (
		<SoundList
			sounds={sounds}
			activeCategory={props.params.category_slug}
		/>
	);
}


export default compose(
	soundListCategoryQuery,
)(SoundListCategoryContainer);
