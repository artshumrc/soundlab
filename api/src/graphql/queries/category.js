/**
 * Queries for categories
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import CategoryType from '../types/category';

// logic
import CategoryService from '../logic/category';


const categoryQueryFields = {
	category: {
		type: CategoryType,
		description: 'Get a category by the category term id or slug',
		args: {
			term_id: {
				type: GraphQLID,
			},
			term_slug: {
				type: GraphQLString,
			},
		},
		async resolve(parent, { term_id, term_slug }, { token }) {
			const categoryService = new CategoryService({ token });
			return await categoryService.getCategory({ term_id, term_slug });
		}
	},
};

export default categoryQueryFields;
