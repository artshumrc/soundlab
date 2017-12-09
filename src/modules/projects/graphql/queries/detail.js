import { gql, graphql } from 'react-apollo';

const query = gql`
	query projectQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
		}
	}
`;

const projectQuery = graphql(query, {
	name: 'projectQuery',
  options: ({ params }) => {
		return ({
    variables: {
      hostname: params.hostname,
    }
  })},
});

export default projectQuery;
