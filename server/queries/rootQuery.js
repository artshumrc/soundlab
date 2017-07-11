import { GraphQLObjectType } from 'graphql';

import projectQueryFileds from './projects';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...projectQueryFileds,
	}
});

export default RootQuery;
