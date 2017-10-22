import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';


import MenuItemType from './menuItem';


/**
 * Menu type
 * @type {GraphQLObjectType}
 */

const MenuType = new GraphQLObjectType({
	name: 'Menu',
	description: 'Wordpress menu',
	fields: () => ({
    id: {
			type: GraphQLID,
		},
    name: {
			type: GraphQLString,
		},
    items: {
			type: new GraphQLList(MenuItemType),
      resolve( _, {}, { token }) {
				// TODO: resolve menuItems for menu
        return [];
      }
		},
	}),
 });

 export default MenuType;
