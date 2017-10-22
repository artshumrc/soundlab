/**
 * Mutations for users
 */

import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

// types
import { UserType, UserInputType, PositionInputType } from '../types/user';
import { RemoveType } from '../types/remove';

// logic
import UsersService from '../logic/user';

const usersMutationFields = {
	userCreate: {
		type: UserType,
		description: 'Create a new user',
		args: {
			userEmail: {
				type: GraphQLString,
			}
		},
		async resolve(parent, { user }, {token}) {
			const usersService = new UsersService({token});
			return await usersService.create(user);
		}
	},
	userUpdate: {
		type: UserType,
		description: 'Update a user',
		args: {
			id: {
				type: new GraphQLNonNull(GraphQLID)
			},
			user: {
				type: UserInputType
			}
		},
		async resolve(parent, { id, user }, { token }) {
			const usersService = new UsersService({ token });
			return await usersService.update(id, user);
		}
	},
	userRemove: {
		type: RemoveType,
		description: 'Remove a single user',
		args: {
			id: {
				type: new GraphQLNonNull(GraphQLID)
			}
		},
		async resolve(parent, { id }, { token }) {
			const usersService = new UsersService({ token });
			return await usersService.remove(id);
		}
	},
};

export default usersMutationFields;
