import { gql, graphql } from 'react-apollo';

const query = gql`
	query userProfileProjectsQuery {
		userProfileProjects {
			_id
			projects
		}
	}
`;

const userProfileProjectsQuery = graphql(query, {
	name: 'userProfileProjectsQuery',
});

export default userProfileProjectsQuery;
