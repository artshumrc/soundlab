import { GraphQLObjectType } from 'graphql';

import projectMutationFileds from './projects';

/**
 * Root mutations
 * @type {GraphQLObjectType}
 */
const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		...projectMutationFileds,
	}
});

export default RootMutations;
