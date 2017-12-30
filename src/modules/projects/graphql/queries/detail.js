import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query projectQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
			title
			slug
			subtitle
			description
			hostname
			email
			url
			address
			phone
			userIsAdmin

			collections(limit: 3) {
				_id
				title
				slug
				description
				coverImage
				itemsCount
			}

			items(limit: 3) {
				_id
				title
				description
			}

			users {
				role
				user {
					_id
					username
					avatar
					name
					isActiveUser
				}
			}
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
		}
	}),
});

export default projectQuery;
