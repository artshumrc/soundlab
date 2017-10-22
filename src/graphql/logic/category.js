import PermissionsService from './PermissionsService';

import Term from '../../models/Term';

/**
 * Logic-layer service for dealing with categories 
 */

export default class CategoryService extends PermissionsService {

	/**
	 * Get a category term by the term id
	 * @param {string} termId -
	 * @returns {Object} Term object record
	 */
  getCategoryById(termId) {
    return Term.findOne({
      where: { termId }
    });
  }
}
