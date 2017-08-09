import { GraphQLObjectType } from 'graphql';

import projectMutationFileds from './projects';
import projectDetailMutationFileds from './projectDetail';
import miradorMutationFileds from './miradors';

/**
 * Root mutations
 * @type {GraphQLObjectType}
 */
const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	description: 'Root mutation object type',
	fields: {
		...projectMutationFileds,
		...projectDetailMutationFileds,
		...miradorMutationFileds,
	},
});

export default RootMutations;
