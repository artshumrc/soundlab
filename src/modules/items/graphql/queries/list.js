import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query itemListQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
			items {
				_id
				title
				slug
				description
			}
			itemsCount
		}
	}
`;

const itemListQuery = graphql(query, {
	name: 'itemListQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
		}
	}),
});

export default itemListQuery;
