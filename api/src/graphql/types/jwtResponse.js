import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Type for response from Wordpress REST JWT Authentication
 * @type {GraphQLObjectType}
 */

const JWTResponseType = new GraphQLObjectType({
	name: 'JWTResponse',
	description: 'A type for processing responses from the Wordpress JWT server',
	fields: () => ({
		response: {
			type: GraphQLJSON,
		},
	}),
});

 export { JWTResponseType };
