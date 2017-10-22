import PermissionsService from './PermissionsService';

import User from '../../models/User';

/**
 * Logic-layer service for dealing with users
 */

export default class UserService extends PermissionsService {

	/**
	 * Create a user
	 * @param {string} userEmail - email of user
	 * @returns {boolean} create response
	 */

	create(userEmail) {
		/*
		 * This needs to go through the Wordpress JSON API
		 *
    return User.create({
        display_name: args.display_name,
        user_email: args.user_email
    });
		*/
  }

	update(id, user) {
		/*
		 * This needs to go through the Wordpress JSON API
		 *
		*/
  }

	delete(id) {
  }
}
