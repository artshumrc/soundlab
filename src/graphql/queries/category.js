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
		description: 'Get a category by the category term id',
		args: {
			term_id: {
				type: GraphQLID,
			}
		},
		async resolve(parent, { term_id }, { token }) {
			const categoryService = new CategoryService({ token });
			return await categoryService.getCategoryById(term_id);
		}
	},
};

export default categoryQueryFields;
