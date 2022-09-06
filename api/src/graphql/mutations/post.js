/**
 * Mutations for posts
 */

import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// types
import PostType, { PostInputType } from '../types/post';

// logic
import PostsService from '../logic/post';

const postsMutationFields = {
	postCreate: {
		type: PostType,
		description: 'Create a new post',
		args: {
			post: {
				type: PostInputType,
			}
		},
		async resolve(parent, { post }, { token }) {
			const postsService = new PostsService({ token });
			return await postsService.create(post);
		}
	},
};

export default postsMutationFields;
