import { gql, graphql } from 'react-apollo';

const query = gql`
	query userAvatarQuery {
		userProfile {
			avatar
		}
	}
`;

const userAvatarQuery = graphql(query, {
	name: 'userAvatarQuery',
});

export default userAvatarQuery;
