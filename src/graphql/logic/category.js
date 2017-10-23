import PermissionsService from './PermissionsService';

import Term from '../../models/Term';

/**
 * Logic-layer service for dealing with categories
 */

export default class CategoryService extends PermissionsService {

	/**
	 * Get a category term by the term id
	 * @param {number} term_id - the id of the requested term
	 * @param {string} term_slug - the slug of the requested term
	 * @returns {Object} Term object record
	 */
  getCategory({ term_id, term_slug }) {
		if (term_slug) {
	    return Term.findOne({
	      where: {
					slug: term_slug,
				}
	    });
		}

    return Term.findOne({
      where: {
				term_id,
			}
    });
  }
}
