import PHPUnserialize from 'php-unserialize';
import _ from 'underscore';
import Sequelize from 'sequelize';
import moment from 'moment';
import validator from 'validator';
import slugify from 'slugify';

import PermissionsService from './PermissionsService';
import Term from '../../models/Term';
import TermRelationship from '../../models/TermRelationship';
import Post from '../../models/Post';
import Postmeta from '../../models/Postmeta';
import User from '../../models/User';

import EmailManager from '../../email';


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
	getPosts({ post_type=['sound'], limit = 200, skip = 0, isFeatured = false }) {
		let include = [];

		if (isFeatured) {
      include = [{
        model: Postmeta,
				where: {
					meta_key: 'is_featured',
					meta_value: 1,
				},
      }];
		}

		return Post.findAll({
			include,
			where: {
				post_type,
				post_status: 'publish',
			},
			limit: limit,
			offset: skip,
			order: [
				['post_modified', 'DESC']
			]
		})
	}


	/**
	 * Get user posts
	 * @param {string[]} post_type - post types
	 * @param {number} limit - the orm query limit
	 * @param {number} skip - the orm query skip
	 * @returns {Object[]} post object records
	 */
	getUserPosts({ post_type=['sound'], limit = 200, skip = 0 }) {
		if (!this.userId) {
			return [];
		}

		return Post.findAll({
			where: {
				post_author: this.userId,
				post_status: ['publish', 'draft', 'future', 'pending', 'private'],
				post_type,
			},
			limit: limit,
			offset: skip,
			order: [
				['post_modified', 'DESC']
			]
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
	getSearchResults({ post_type=['sound', 'resource', 'event', 'playlist', 'submission'], searchText='', limit = 200, skip = 0 }) {
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
			offset: skip,
			order: [
				['post_modified', 'DESC']
			]
		})
	}

	/**
	 * Get events
	 * @param {string[]} post_type - post types
	 * @param {number} limit - the orm query limit
	 * @param {number} skip - the orm query skip
	 * @param {boolean} upcoming - get upcoming posts or past posts
	 * @returns {Object[]} post object records
	 */
	getEvents({ post_type=['event'], limit = 200, skip = 0, upcoming = false }) {

		const now = parseInt(moment().format("YYYYMMDD"), 10);

		let include = [{
			model: Postmeta,
			where: {
				meta_key: 'start_date',
				meta_value: {
					[Sequelize.Op.lte]: now,
				},
			},
		}];

		let order = [[
			Postmeta, 'meta_value', 'DESC'
		]];

		if (upcoming) {
			include = [{
				model: Postmeta,
				where: {
					meta_key: 'start_date',
					meta_value: {
						[Sequelize.Op.gte]: now,
					},
				},
				order: [
					'meta_value', 'ASC'
				]
			}];

			order = [[
				Postmeta, 'meta_value', 'ASC'
			]];
		}


		return Post.findAll({
			include,
			where: {
				post_type,
				post_status: 'publish',
			},
			limit,
			order,
			offset: skip,
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
	getPostsInCategory(termId, { post_type = ['sound'], limit = 200, skip = 0 }) {
		return TermRelationship.findAll({
			attributes: [],
			include: [{
				model: Post,
				where: {
					post_type,
					post_status: 'publish'
				},
				order: [
					['post_modified', 'DESC']
				]
			}],
			where: {
				term_taxonomy_id: termId
			},
			limit: limit,
			offset: skip,
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
				return Postmeta.findOne({
					where: {
						post_id: Number(res.dataValues.meta_value),
						meta_key: '_wp_attachment_metadata',
					},
				}).then(_res => {
					if (_res) {
						return PHPUnserialize.unserialize(_res.dataValues.meta_value);
					}
					return null;
				});
			}
			return null;
		});
	}

	/**
	 * Get a playlist queue
	 * @param {number} postId - the id of the post to query the playlist for
	 * @returns {Object[]} posts in post repeater relationship meta field
	 */
	getQueue(postId) {
		return Postmeta.findOne({
			where: {
				post_id: postId,
				meta_key: 'queue_0_sound'
			}
		}).then(res => {

			if (res) {
				const post_ids = [];
				const meta_value = PHPUnserialize.unserialize(res.dataValues.meta_value);
				for (let key in meta_value) {
					post_ids.push(parseInt(meta_value[key], 10));
				}

				return Post.findAll({
					where: {
						ID: post_ids,
					},
				});
			}
			return null;
		});
	}

	/**
	 * Get a post audio_file
	 * @param {number} postId - the id of the post
	 * @returns {Object} the audio file attachment information
	 */
	getAudioFile(postId) {
		return Postmeta.findOne({
			where: {
				post_id: postId,
				meta_key: 'audio_file',
			}
		}).then(res => {
			if (res) {
				return Postmeta.findAll({
					where: {
						post_id: parseInt(res.dataValues.meta_value, 10),
						meta_key: ['_wp_attached_file', '_wp_attachment_metadata']
					}
				}).then(_res => {
					if (_res) {
						const fileWithMetadata = {};

						_res.forEach(row => {
							if (row.dataValues.meta_key === '_wp_attached_file') {
								fileWithMetadata.attached_file = row.dataValues.meta_value;
							} else if (row.meta_key === '_wp_attachment_metadata') {
								fileWithMetadata.metadata = PHPUnserialize.unserialize(row.dataValues.meta_value);
							}
						});

						return fileWithMetadata;
					}
				});
			}
		});
	}

	/**
	 * Create a post with draft status
	 * @param {Object} post - the post candidate
	 * @returns {Object} the api response
	 */
	async create(post) {
		if (!this.userId) {
			console.error('Authentication error');
			return null;
		}

		const user = await User.findOne({
			where: {
				id: this.userId,
			}
		});

		if (!user) {
			console.error('No user found error');
			return null;
		}

		const title = `Submission from ${user.dataValues.display_name} (${user.dataValues.user_email})`;
		const newPost = {
			post_title: title,
			post_status: 'draft',
			post_author: this.userId,
			post_name: slugify(title),
			post_type: 'user_submission',
			post_content: validator.escape(post.content),
		};

		const emailManager = new EmailManager();
		emailManager.sendNotificationEmail(`${title} ${post.content}`);

		return await Post.create(newPost);
	}
}
