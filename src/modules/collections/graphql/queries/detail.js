import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query collectionQuery($hostname: String, $slug: String) {
		project(hostname: $hostname) {
	    _id
			collection(slug: $slug) {
				_id
				title
				slug
				description
				items {
					_id
					title
					slug
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
