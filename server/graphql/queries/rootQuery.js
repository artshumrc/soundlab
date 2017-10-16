import { GraphQLObjectType } from 'graphql';

import projectQueryFields from './project';
import userProjectsQueryFields from './userProjects';
import userProfileQueryFields from './userProfile';
import miradorQueryFields from './miradors';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...projectQueryFields,
		...userProjectsQueryFields,
		...userProfileQueryFields
		...miradorQueryFields
	},
});

export default RootQuery;
