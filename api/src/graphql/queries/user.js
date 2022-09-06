/**
 * Queries for users
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import { UserType } from '../types/user';

// logic
import UserService from '../logic/user';


const userQueryFields = {
	users: {
		type: UserType,
		description: 'Get a user optionally by id',
		args: {
			id: {
				type: GraphQLID,
			}
		},
		async resolve(parent, { id }, { token }) {
			const userService = new UserService({ token });
			return await userService.getUser(id);
		}
	},
};

export default userQueryFields;
