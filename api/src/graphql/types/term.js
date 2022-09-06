import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';

/**
 * Term type
 * @type {GraphQLObjectType}
 */

const TermType = new GraphQLObjectType({
	name: 'Term',
	description: 'Wordpress term',
	fields: () => ({
		term_id: {
			type: GraphQLID,
		},
	}),
});

export default TermType;
