import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } from 'graphql';

import PostType from '../types/post';


/**
 * Menu Item type
 * @type {GraphQLObjectType}
 */

const MenuItemType = new GraphQLObjectType({
	name: 'MenuItem',
	description: 'Wordpress menu item',
	fields: () => ({
		id: {
			type: GraphQLID,
		},
		post_title: {
			type: GraphQLString,
		},
		order: {
			type: GraphQLInt,
		},
		navitem: {
			type: PostType,
		},
	}),
});

export default MenuItemType;
