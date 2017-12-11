import { gql, graphql } from 'react-apollo';

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
      hostname: params.hostname,
      slug: params.slug,
    }
  })},
});

export default itemQuery;
