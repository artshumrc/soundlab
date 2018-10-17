import React from 'react';
import { compose } from 'react-apollo';

// graphql
import projectTagsQuery from '../../graphql/queries/projectTags';

// component
import SearchTags from '../../components/SearchTags';


const SearchTagsContainer = props => {
	let tags = [];

	if (
    props.projectQuery
    && props.projectQuery.project
    && props.projectQuery.project.tags
  ) {
		tags = props.projectQuery.project.tags;
	}

	return (
		<SearchTags
			tags={tags}
    />
	);
};

export default compose(
  projectTagsQuery,
)(SearchTagsContainer);
