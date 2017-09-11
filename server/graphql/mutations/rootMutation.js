import { GraphQLObjectType } from 'graphql';

import projectMutationFileds from './projects';
import miradorMutationFileds from './miradorManifests';
import itemMutationFileds from './item';

/**
 * Root mutations
 * @type {GraphQLObjectType}
 */
const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	description: 'Root mutation object type',
	fields: {
		...projectMutationFileds,
		...miradorMutationFileds,
		...itemMutationFileds,
	},
});

export default RootMutations;
