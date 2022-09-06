import _ from 'underscore';

/**
 * For an array of postmeta items, get a specific postmeta object by meta_key
 * @param {Object[]} post_meta - array of post_meta objects
 * @param {String} meta_key - key of desired postmeta object
 * @returns {Object} post meta object
 */

export default function getPostmetaByKey = (post_meta, meta_key) => {
	return _.findWhere(post_meta, { meta_key });
};
