import https from 'https';
import rp from 'request-promise';
import { createError } from 'apollo-errors';

import PermissionsService from './PermissionsService';

import User from '../../models/User';

const RegistrationError = createError('RegistrationError', {
	message: 'Registration failed',
});

/**
 * Logic-layer service for dealing with users
 */

export default class UserService extends PermissionsService {

	/**
	 * Create a user
	 * @param {Object} user - user candidate to create via wordpress api
	 * @returns {Object} create response
	 */
	async create(user) {
		const uri = `${process.env.ADMIN_URL}/wp-admin/admin-ajax.php`;

		const options = {
			method: 'POST',
			uri,
			formData: {
				action: 'soundlab_user_signup',
				username: user.user_nicename,
				email: user.user_email,
				name: user.display_name,
				password: user.password,
				field: user.field,
			},
			strictSSL: false,
			json: true,
		};
		const result = await rp(options);

		// without modifying the wordpress application, we can't determine what went wrong with creating a user
		if (!result.id) {
			throw new RegistrationError();
		}
		
		return result;
  }

	/**
	 * Reset password
	 * @returns {Object} resetPassword response
	 */
	resetPassword(user) {
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
	 * @param {string} email - the user email
	 * @param {string} password - the user password
	 * @returns {Object} login response
	 */
	userCreateToken(email, password) {

		const uri = `${process.env.ADMIN_URL}/wp-json/jwt-auth/v1/token`;

		const options = {
			method: 'POST',
			uri,
			formData: {
				username: email,
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
					response: JSON.parse(err.error)
				};
			});
  }
}
