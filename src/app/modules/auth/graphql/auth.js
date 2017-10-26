import { gql, graphql } from 'react-apollo';

const userCreate = gql`
mutation userCreate($user: UserInputType!) {
	userCreate(user: $user) {
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


const userCreateMutation = graphql(userCreate, {
	props: (params) => ({
		userCreate: user => params.userCreateMutation({ variables: { user } }),
	}),
	name: 'userCreateMutation',
	options: {
		// refetchQueries: ['usersQuery'],
		// update: (dataStore, submittedData) => {
		// 	const data = dataStore.readQuery({query: query});
		// 	data.users.push(submittedData.data.userCreate);
		// 	dataStore.writeQuery({query: query, data});
		// }
	}
});


const userCreateToken = gql`
mutation userCreateToken($username: String, $password: String) {
	userCreateToken(username: $username, password: $password)
}
 `;


const userCreateTokenMutation = graphql(userCreateToken, {
	props: (params) => ({
		userCreateToken: ({ username, password }) => params.userCreateMutation({
			variables: {
				username,
				password,
			}
		}),
	}),
	name: 'userCreateTokenMutation',
});



export { userCreateMutation, userCreateTokenMutation };
