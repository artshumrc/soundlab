import PermissionsService from './PermissionsService';

import Term from '../../models/Term';
import TermRelationship from '../../models/TermRelationship';
import Post from '../../models/Post';
import Postmeta from '../../models/Postmeta';


/**
 * Logic-layer service for dealing with posts
 */

export default class PostService extends PermissionsService {

	/**
	 * Get posts
	 * @param {string[]} post_type - post types
	 * @param {number} limit - the orm query limit
	 * @param {number} skip - the orm query skip
	 * @returns {Object[]} post object records
	 */
  getPosts({ post_type=['sound'], limit = 10, skip = 0 }) {
    return Post.findAll({
      where: {
        post_type,
        post_status: 'publish'
      },
      limit: limit,
      offset: skip
    })
  }

	/**
	 * Get search results from posts
	 * @param {string[]} post_type - post types
	 * @param {number} limit - the orm query limit
	 * @param {number} skip - the orm query skip
	 * @param {string} searchText - the search text for the query to posts
	 * @returns {Object[]} post object records
	 */
  getSearchResults({ post_type=['sound', 'resource', 'event', 'playlist', 'submission'], searchText='', limit = 10, skip = 0 }) {
		if (!searchText.length) {
			return [];
		}

    return Post.findAll({
      where: {
        post_type,
				[Sequelize.Op.or]: {
					post_title: {
						[Sequelize.Op.like]: `%${searchText}%`,
					},
					post_content: {
						[Sequelize.Op.like]: `%${searchText}%`,
					},
				},
        post_status: 'publish'
      },
      limit: limit,
      offset: skip
    })
  }

	/**
	 * Get posts for a category
	 * @param {number} termId - the id of the category term
	 * @param {string[]} post_type - post types
	 * @param {number} limit - the orm query limit
	 * @param {number} skip - the orm query skip
	 * @returns {Object[]} post object records
	 */
  getPostsInCategory(termId, { post_type, limit = 10, skip = 0 }) {
    return TermRelationship.findAll({
      attributes: [],
      include: [{
        model: Post,
        where: {
          post_type: post_type,
          post_status: 'publish'
        }
      }],
      where: {
        term_taxonomy_id: termId
      },
      limit: limit,
      offset: skip
    }).then(posts => _.map(posts, post => post.wp_post))
  }

	/**
	 * Get a post by the post id
	 * @param {number} postId - the id of the post
	 * @returns {Object} post object records
	 */
  getPostById(postId) {
    return Post.findOne({
      where: {
        post_status: 'publish',
        id: postId
      }
    }).then(post => {
      if (post) {
        const { id } = post.dataValues
        post.dataValues.children = []
        return Post.findAll({
          attributes: ['id'],
          where: {
            post_parent: id
          }
        }).then(childPosts => {
          if (childPosts.length > 0) {
            _.map(childPosts, childPost => {
              post.dataValues.children.push({ id: Number(childPost.dataValues.id) })
            })
          }
          return post
        })
      }
      return null
    })
  }

	/**
	 * Get a post by the post name
	 * @param {string} name - the string of the post_name slug 
	 * @returns {Object} post object records
	 */
  getPostByName(name) {
    return Post.findOne({
      where: {
        post_status: 'publish',
        post_name: name
      }
    })
  }

	/**
	 * Get a post thumbnail
	 * @param {number} postId - the id of the post
	 * @returns {Object} postmeta record
	 */
  getPostThumbnail(postId) {
    return Postmeta.findOne({
      where: {
        post_id: postId,
        meta_key: '_thumbnail_id'
      }
    }).then(res => {
      if (res) {
        const metaKey = amazonS3 ? 'amazonS3_info' : '_wp_attached_file'

        return Post.findOne({
          where: {
            id: Number(res.dataValues.meta_value)
          },
          include: {
            model: Postmeta,
            where: {
              meta_key: metaKey
            },
            limit: 1
          }
        }).then( post => {
          if (post.wp_postmeta[0]) {
            const thumbnail = post.wp_postmeta[0].dataValues.meta_value
            const thumbnailSrc = amazonS3 ?
              uploads + PHPUnserialize.unserialize(thumbnail).key :
              uploads + thumbnail

            return thumbnailSrc
          }
          return null
        })
      }
      return null
    })
  }
}
