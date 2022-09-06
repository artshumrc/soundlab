import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';


// types
import PostType from '../types/post';

// logic
import PostService from '../logic/post';


/**
 * Category type
 * @type {GraphQLObjectType}
 */

const CategoryType = new GraphQLObjectType({
	name: 'Category',
	description: 'Wordpress category',
	fields: () => ({
		term_id: {
			type: GraphQLID,
		},
		name: {
			type: GraphQLString,
		},
		slug: {
			type: GraphQLString,
		},
		posts: {
			type: new GraphQLList(PostType),
			args: {
				post_type: {
					type: new GraphQLList(GraphQLString),
				},
				limit: {
					type: GraphQLInt,
				},
				skip: {
					type: GraphQLInt,
				},
			},
			resolve: async ( category, { post_type, limit, skip }, { token }) => {

				const postService = new PostService({ token });
				return await postService.getPostsInCategory(category.term_id, { post_type, limit, skip });
			},
		},
	}),
 });

 export default CategoryType;
