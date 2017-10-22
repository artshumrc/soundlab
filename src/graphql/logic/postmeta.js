import PermissionsService from './PermissionsService';

import Postmeta from '../../models/Postmeta';


/**
 * Logic-layer service for dealing with postmeta
 */

export default class PostmetaService extends PermissionsService {

	/**
	 * Get postmeta by meta_id and keys
	 * @param {number} meta_id - id of the postmeta record
	 * @param {string[]} keys - list of requested meta keys
	 * @returns {Object} postmeta object
	 */
  getPostmetaById(meta_id, keys) {
    return Postmeta.findOne({
      where: {
        meta_id: meta_id,
        meta_key: {
          $in: keys
        }
      }
    });
  }

	/**
	 * Get all postmeta for a specified post id and meta keys
	 * @param {number} postId - id of the post
	 * @param {string[]} keys - list of requested meta keys
	 * @returns {Object[]} array of postmeta object records
	 */
  getPostmeta(postId, keys) {
    return Postmeta.findAll({
      where: {
        post_id: postId,
        meta_key: {
          $in: keys
        }
      }
    });
  }
}
