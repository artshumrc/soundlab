import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

/**
 * Postmeta type
 * @type {GraphQLObjectType}
 */

 const PostmetaType = new GraphQLObjectType({
	 name: 'Postmeta',
	 description: 'Wordpress postmeta',
	 fields: () => ({
			id: {
				type: GraphQLID,
			},
			meta_id: {
				type: GraphQLInt,
			},
			post_id: {
				type: GraphQLInt,
			},
			meta_key: {
				type: GraphQLString,
			},
			meta_value: {
				type: GraphQLString,
			},
	 }),
 });

 export default PostmetaType;
