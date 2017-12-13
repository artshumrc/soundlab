import PermissionsService from './PermissionsService';

import Term from '../../models/Term';
import TermRelationship from '../../models/TermRelationship';


/**
 * Logic-layer service for dealing with postmeta
 */

export default class TermService extends PermissionsService {

	/**
	 * Get categories for the post
	 * @param {number} post_id - id of the post
	 * @returns {Object[]} terms
	 */
  getCategoriesAndTagsForPost(post_id) {
    return TermRelationship.findAll({
			include: [{
				model: Term,
				required: true,
			}],
      where: {
				object_id: post_id,
      }
    }).then(res => {
			if (res) {
				let terms = [];

				res.forEach(row => {
					terms.push(row.dataValues.wp_term);
				});

				return terms;
			}
		});
  }


	/**
	 * Get all tags
	 * @returns {Object[]} terms
	 */
  getTerms() {
    return Term.findAll({
			order: [[ 'name', 'asc' ]],
		});
  }
}
