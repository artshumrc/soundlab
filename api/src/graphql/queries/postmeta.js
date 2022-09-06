/**
 * Queries for postmeta
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import PostmetaType from '../types/postmeta';

// logic
import PostmetaService from '../logic/postmeta';


const postmetaQueryFields = {
	postmeta: {
		type: PostmetaType,
		description: 'Get a postmeta by the postmeta term id',
		args: {
			post_id: {
				type: GraphQLID,
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
		async resolve(parent, { post_id, before, after, first, last }, { token }) {
			const postmetaService = new PostmetaService({ token });
			return await postmetaService.getPostmetaById( post_id, before, after, first, last );
		}
	},
};

export default postmetaQueryFields;
