import { GraphQLObjectType } from 'graphql';

import projectQueryFileds from './project';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...projectQueryFileds,
	},
});

export default RootQuery;
