import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInputObjectType, GraphQLInt } from 'graphql';


import PostmetaService from '../logic/postmeta';
import PostmetaType from './postmeta';


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
    post_meta: {
			type: new GraphQLList(PostmetaType),
			args: {
				keys: {
					type: new GraphQLList(GraphQLString),
				},
				before: {
					type: GraphQLString,
				},
				after: {
					type: GraphQLString,
				},
				first: {
					type: GraphQLInt,
				},
				last: {
					type: GraphQLInt,
				},
			},
			resolve: async ( post, { keys, before, after, first, last }, { token } ) => {
				const postmetaService = new PostmetaService({ token });
        return await postmetaService.getPostmeta(post.id, keys);
			},
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
    display_name: {
			type: GraphQLString,
		},
    password: {
			type: GraphQLString,
		},
    field: {
			type: GraphQLString,
		},
	},
});

export { UserType, UserInputType };
