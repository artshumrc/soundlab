import { gql, graphql } from 'react-apollo';

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
		}
	}
`;

const itemListQuery = graphql(query, {
	name: 'itemListQuery',
  options: ({ params }) => {
		return ({
    variables: {
      hostname: params.hostname,
    }
  })},
});

export default itemListQuery;
