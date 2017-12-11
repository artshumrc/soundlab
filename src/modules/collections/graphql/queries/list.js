import { gql, graphql } from 'react-apollo';

const query = gql`
	query collectionListQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
			collections {
				_id
				title
				slug
				description
			}
		}
	}
`;

const collectionListQuery = graphql(query, {
	name: 'collectionListQuery',
  options: ({ params }) => {
		return ({
    variables: {
      hostname: params.hostname,
    }
  })},
});

export default collectionListQuery;
