import { GraphQLString, GraphQLBoolean, GraphQLObjectType } from 'graphql';

/**
 * Setting type
 * @type {GraphQLObjectType}
 */

const SettingType = new GraphQLObjectType({
	name: 'Setting',
	description: 'Wordpress setting',
	fields: () => ({
		uploads: {
			type: GraphQLString,
		},
		amazonS3: {
			type: GraphQLBoolean,
		},
	}),
});

export default SettingType;
