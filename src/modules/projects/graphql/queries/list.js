import { gql, graphql } from 'react-apollo';

const query = gql`
	query projectsQuery {
		projects {
	    _id
		}
	}
`;

const projectsQuery = graphql(query, {
	name: 'projectsQuery',
});

export { projectsQuery };
