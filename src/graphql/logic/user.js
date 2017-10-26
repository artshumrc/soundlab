import https from 'https';
import rp from 'request-promise';


import PermissionsService from './PermissionsService';

import User from '../../models/User';

/**
 * Logic-layer service for dealing with users
 */

export default class UserService extends PermissionsService {

	/**
	 * Create a user
	 * @param {string} nameFirst - the first name of the user
	 * @param {string} nameLast - the last name of the user
	 * @param {string} email - email of user
	 * @param {string} password - password of user account
	 * @param {string} field - the field that the user is studying
	 * @returns {Object} create response
	 */

	create(user) {
		const uri = `${process.env.ADMIN_URL}/wp/v2/users`;

		const options = {
			method: 'POST',
			uri,
			formData: {
				username: user.user_nicename,
				email: user.user_email,
				name: user.display_name,
				password: user.password,
				_wpnonce: "1382f65f4c",
			},
			strictSSL: false,
		};
		return rp(options)
			.then(res => {
				return JSON.parse(res);
			})
			.catch(err => {
				console.log(err);
			});
  }

	/**
	 * Update a user
	 * @param {number} id - the id of the user
	 * @param {Object} user - the user object to update
	 * @returns {Object} update response
	 */
	update(id, user) {
  }

	/**
	 * Delete a user
	 * @param {number} id - the id of the user
	 * @returns {Object} update response
	 */
	delete(id) {
  }

	/**
	 * Login a user
	 * @param {string} username - the user email
	 * @param {string} password - the user email
	 * @returns {Object} login response
	 */
	userCreateToken(username, password) {

		const uri = `${process.env.ADMIN_URL}/wp-json/jwt-auth/v1/token`;

		const options = {
			method: 'POST',
			uri,
			formData: {
				username,
				password,
			},
			strictSSL: false,
		};
		return rp(options)
			.then(res => {
				return {
					response: JSON.parse(res)
				};
			})
			.catch(err => {
				return {
					response: JSON.parse(err.response.body)
				};
			});
  }
}
