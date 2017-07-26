import { GraphQLObjectType } from 'graphql';

import projectQueryFileds from './projects';
import miradorQueryFields from './miradors';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...projectQueryFileds,
		...miradorQueryFields
	},
});

export default RootQuery;
