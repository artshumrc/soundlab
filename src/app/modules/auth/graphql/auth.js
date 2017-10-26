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
mutation userCreateToken($user_email: String, $password: String) {
	userCreateToken(user_email: $user_email, password: $password) {
		token
		error
	}
}
 `;


const userCreateTokenMutation = graphql(userCreateToken, {
	props: (params) => ({
		userCreateToken: ({ user_email, password }) => params.userCreateMutation({
			variables: {
				user_email,
				password,
			}
		}),
	}),
	name: 'userCreateTokenMutation',
	options: {
		// refetchQueries: ['usersQuery'],
		// update: (dataStore, submittedData) => {
		// 	const data = dataStore.readQuery({query: query});
		// 	data.users.push(submittedData.data.userCreate);
		// 	dataStore.writeQuery({query: query, data});
		// }
	}
});



export { userCreateMutation, userCreateTokenMutation };
