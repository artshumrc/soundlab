/**
 * Mutations for users
 */

import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// types
import { UserType, UserInputType, PositionInputType } from '../types/user';
import { JWTResponseType } from '../types/jwtResponse';
import { RemoveType } from '../types/remove';

// logic
import UsersService from '../logic/user';

const usersMutationFields = {
	userCreate: {
		type: UserType,
		description: 'Create a new user',
		args: {
			user: {
				type: UserInputType,
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
	userCreateToken: {
		type: JWTResponseType,
		description: 'Login a user and return token',
		args: {
			username: {
				type: GraphQLString,
			},
			password: {
				type: GraphQLString,
			},
		},
		async resolve(parent, { username, password }, { token }) {
			const userService = new UsersService({ token });
			return await userService.userCreateToken( username, password );
		}
	},
};

export default usersMutationFields;
