import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query itemQuery($hostname: String, $slug: String) {
		project(hostname: $hostname) {
	    _id
			userIsAdmin
			item(slug: $slug) {
				_id
				title
				slug
				description

				metadata {
					value
					label
				}

				files {
					name
					title
					type
					path
				}

				commentsCount
				comments {
					userId
					itemId
					content
					_id
					updatedAt
					createdAt
					__v
				}
			}
		}
	}
`;

const itemQuery = graphql(query, {
	name: 'itemQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			slug: params.slug,
		}
	}),
});

export default itemQuery;
