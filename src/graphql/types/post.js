import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

import PostmetaService from '../logic/postmeta';
import PostService from '../logic/post';
import UserService from '../logic/user';
import { UserType } from '../types/user';

import PostmetaType from './postmeta';


/**
 * Post type
 * @type {GraphQLObjectType}
 */

const PostType = new GraphQLObjectType({
	name: 'Post',
	description: 'Wordpress post',
	fields: () => ({
    id: {
			type: GraphQLID,
		},
    post_title: {
			type: GraphQLString,
		},
    post_content: {
			type: GraphQLString,
		},
    post_excerpt: {
			type: GraphQLString,
		},
    post_status: {
			type: GraphQLString,
		},
    post_type: {
			type: GraphQLString,
		},
    post_name: {
			type: GraphQLString,
		},
    post_parent: {
			type: GraphQLInt,
		},
    menu_order: {
			type: GraphQLInt,
		},
    post_author: {
			type: GraphQLInt,
		},
    post_modified: {
			type: GraphQLString,
		},
    thumbnail: {
			type: GraphQLString,
		},
    author: {
			type: UserType,
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

    thumbnail: {
			type: GraphQLJSON,
			resolve: async ( post, {}, { token } ) => {
				const postService = new PostService({ token });
        return await postService.getPostThumbnail(post.id);
			},
		},

    author: {
			type: UserType,
			resolve: async ( post, {}, { token } ) => {
				const userService = new UserService({ token });
        return await userService.getUser(post.post_author);
			},
		},

    queue: {
			type: new GraphQLList(PostType),
			resolve: async ( post, {}, { token } ) => {
				const postService = new PostService({ token });
        return await postService.getQueue(post.id);
			},
		},

    audio_file: {
			type: GraphQLJSON,
			resolve: async ( post, {}, { token } ) => {
				const postService = new PostService({ token });
        return await postService.getAudioFile(post.id);
			},
		},
	}),
});

const PostInputType = new GraphQLInputObjectType({
	name: 'PostInputType',
	description: 'Wordpress post input type',
	fields: () => ({
    title: {
			type: GraphQLString,
		},
    description: {
			type: GraphQLString,
		},
    location: {
			type: GraphQLString,
		},
    link: {
			type: GraphQLString,
		},
	}),
});

export { PostInputType };
export default PostType;
