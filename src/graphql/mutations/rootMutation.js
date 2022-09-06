import { GraphQLObjectType } from 'graphql';

import postMutationFields from './post';
import userMutationFields from './user';

/**
 * Root mutations
 * @type {GraphQLObjectType}
 */
const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	description: 'Root mutation object type',
	fields: {
		...postMutationFields,
		...userMutationFields,
	},
});

export default RootMutations;
