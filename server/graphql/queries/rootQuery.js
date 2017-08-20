import { GraphQLObjectType } from 'graphql';

import projectQueryFields from './project';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...projectQueryFields,
	},
});

export default RootQuery;
