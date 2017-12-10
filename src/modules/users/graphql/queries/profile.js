import { gql, graphql } from 'react-apollo';

const query = gql`
	query userProfileQuery($hostname: String) {
		userProfile(hostname: $hostname) {
	    _id
			username
			avatar
	    name
	    email
	    bio
		}
	}
`;

const userProfileQuery = graphql(query, {
	name: 'userProfileQuery',
});

export default userProfileQuery;
