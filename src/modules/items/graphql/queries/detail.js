import { gql, graphql } from 'react-apollo';

import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';


const query = gql`
	query itemQuery($hostname: String, $slug: String) {
		project(hostname: $hostname) {
	    _id
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
			}
		}
	}
`;

const itemQuery = graphql(query, {
	name: 'itemQuery',
  options: ({ params }) => {
		return ({
    variables: {
      hostname: getCurrentProjectHostname(),
      slug: params.slug,
    }
  })},
});

export default itemQuery;
