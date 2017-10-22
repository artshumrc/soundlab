import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';

/**
 * Term taxonomy type
 * @type {GraphQLObjectType}
 */

 const TermTaxonomyType = new GraphQLObjectType({
	 name: 'TermTaxonomy',
	 description: 'Wordpress term taxonomy',
	 fields: () => ({
		term_id: {
			type: GraphQLID,
		},
	 }),
 });

 export default TermTaxonomyType;
