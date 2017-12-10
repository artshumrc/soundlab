import { gql, graphql } from 'react-apollo';

const query = gql`
	query projectActivityQuery($hostname: String) {
		project(hostname: $hostname) {
	    _id
			activity
		}
	}
`;

const projectActivityQuery = graphql(query, {
	name: 'projectActivityQuery',
  options: ({ params }) => {
		return ({
    variables: {
      hostname: params.hostname,
    },
  })},
});

export default projectActivityQuery;
