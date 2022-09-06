import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';

/**
 * Page Info type
 * @type {GraphQLObjectType}
 */

const PageInfoType = new GraphQLObjectType({
	name: 'PageInfo',
	description: 'Wordpress page info',
	fields: () => ({
		hasNextPage: {
			type: GraphQLBoolean,
		},
		hasPreviousPage: {
			type: GraphQLBoolean,
		},
		startCursor: {
			type: GraphQLString,
		},
		endCursor: {
			type: GraphQLString,
		},
	}),
});

export default PageInfoType;
