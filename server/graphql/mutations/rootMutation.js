import { GraphQLObjectType } from 'graphql';

import projectMutationFileds from './projects';

/**
 * Root mutations
 * @type {GraphQLObjectType}
 */
const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	description: 'Root mutation object type',
	fields: {
		...projectMutationFileds,
	},
});

export default RootMutations;
