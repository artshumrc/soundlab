import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query collectionQuery($hostname: String, $slug: String) {
		project(hostname: $hostname) {
	    _id
			userIsAdmin
			collection(slug: $slug) {
				_id
				title
				slug
				coverImage
				description
				itemsCount
				projectId
				items {
					_id
					title
					description
					slug
					files {
						_id
						name
						title
						itemId
						type
						path
						thumbPath
						slug
					}
				}
			}
		}
	}
`;

const collectionQuery = graphql(query, {
	name: 'collectionQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			slug: params.slug,
		}
	}),
});

export default collectionQuery;
