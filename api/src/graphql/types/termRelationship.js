import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';

/**
 * Term relationship type
 * @type {GraphQLObjectType}
 */

 const TermRelationshipType = new GraphQLObjectType({
	 name: 'TermRelationship',
	 description: 'Wordpress term relationship',
	 fields: () => ({
		term_id: {
			type: GraphQLID,
		},
	 }),
 });

 export default TermRelationshipType;
