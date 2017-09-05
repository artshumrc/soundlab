import { GraphQLObjectType } from 'graphql';

import projectQueryFields from './project';
import userProjectsQueryFields from './userProjects';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...projectQueryFields,
		...userProjectsQueryFields
	},
});

export default RootQuery;
