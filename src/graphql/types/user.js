import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInputObjectType } from 'graphql';

/**
 * User type
 * @type {GraphQLObjectType}
 */
const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'Wordpress user',
	fields: () => ({
    id: {
			type: GraphQLID,
		},
    user_nicename: {
			type: GraphQLString,
		},
    user_email: {
			type: GraphQLString,
		},
    user_registered: {
			type: GraphQLString,
		},
    display_name: {
			type: GraphQLString,
		},
	}),
});

/**
 * User input type
 * @type {GraphQLInputObjectType}
 */
const UserInputType = new GraphQLInputObjectType({
	name: 'UserInputType',
	description: 'Wordpress user input',
	fields: {
    id: {
			type: GraphQLID,
		},
    user_nicename: {
			type: GraphQLString,
		},
    user_email: {
			type: GraphQLString,
		},
    user_registered: {
			type: GraphQLString,
		},
    display_name: {
			type: GraphQLString,
		},
	},
});

export { UserType, UserInputType };
