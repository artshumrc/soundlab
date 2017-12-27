import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query articleQuery($hostname: String, $slug: String) {
		project(hostname: $hostname) {
	    _id
			article(slug: $slug) {
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
			}
		}
	}
`;

const articleQuery = graphql(query, {
	name: 'articleQuery',
	options: ({ params }) => ({
		variables: {
			hostname: getCurrentProjectHostname(),
			slug: params.slug,
		}
	}),
});

export default articleQuery;
