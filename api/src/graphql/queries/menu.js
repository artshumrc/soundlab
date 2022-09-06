/**
 * Queries for menus
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import MenuType from '../types/menu';

// logic
import MenuService from '../logic/menu';


const menuQueryFields = {
	menus: {
		type: MenuType,
		description: 'Get a menu by a term name',
		args: {
			name: {
				type: GraphQLString,
			}
		},
		async resolve(parent, { name }, { token }) {
			const menuService = new MenuService({ token });
			return await menuService.getMenu(name);
		}
	},
};

export default menuQueryFields;
