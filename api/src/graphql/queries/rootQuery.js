import { GraphQLObjectType } from 'graphql';

import categoryQueryFields from './category';
import menuQueryFields from './menu';
import postQueryFields from './post';
import postmetaQueryFields from './postmeta';
import settingsQueryFields from './settings';
import userQueryFields from './user';

/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query object type',
	fields: {
		...categoryQueryFields,
		...menuQueryFields,
		...postQueryFields,
		...postmetaQueryFields,
		...settingsQueryFields,
		...userQueryFields,
	},
});

export default RootQuery;
