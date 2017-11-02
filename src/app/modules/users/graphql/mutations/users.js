import { gql, graphql } from 'react-apollo';

const userUpdate = gql`
mutation userUpdate($user: UserInputType!) {
	userUpdate(user: $user) {
		id
		user_nicename
		user_email
		display_name
		post_meta(keys: ["field"]) {
			meta_key
			meta_value
		}
	}
}
 `;


const userUpdateMutation = graphql(userUpdate, {
	props: (params) => ({
		userUpdate: user => params.userUpdateMutation({ variables: { user } }),
	}),
	name: 'userUpdateMutation',
	options: {
		// refetchQueries: ['usersQuery'],
		// update: (dataStore, submittedData) => {
		// 	const data = dataStore.readQuery({query: query});
		// 	data.users.push(submittedData.data.userCreate);
		// 	dataStore.writeQuery({query: query, data});
		// }
	}
});

export { userUpdateMutation };
