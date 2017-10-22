/**
 * Queries for posts
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import PostType from '../types/post';

// logic
import PostService from '../logic/post';


const postQueryFields = {
	posts: {
		type: new GraphQLList(PostType),
		description: 'Get posts',
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
			isFeatured: {
				type: GraphQLBoolean,
			},
		},
		async resolve(parent, { post_type, limit, skip, isFeatured }, { token }) {
			const postService = new PostService({ token });
			return await postService.getPosts({ post_type, limit, skip, isFeatured });
		}
	},
	post: {
		type: PostType,
		description: 'Get a post',
		args: {
			id: {
				type: GraphQLInt,
			},
			name: {
				type: GraphQLString,
			},
		},
		async resolve(parent, { name, id }, { token }) {
			const postService = new PostService({ token });

      if (name) {
        return await postService.getPostByName(name, id);
      }

      return await postService.getPostById(id);
		}
	},
};

export default postQueryFields;
