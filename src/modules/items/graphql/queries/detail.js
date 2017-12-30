import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query itemQuery($hostname: String, $id: String) {
		project(hostname: $hostname) {
	    _id
			userIsAdmin
			item(_id: $id) {
				_id
				title
				slug
				description

				metadata {
					type
					label
					value
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
			id: params.slug,
		}
	}),
});

export default itemQuery;
