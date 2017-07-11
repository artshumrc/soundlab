import check from 'check-types';

// models
import User from '../models/user';

// errors
import { AuthenticationError } from '../errors';

/**
 * Users Buisness logic layer
 * @type {Object}
 * @property {function} validateUser Validate username and return the found user
 */
const Users = {

	async validateUser(username) {

		if (username && check.string(username)) {
			try {
				const user = await this.UsersModel.findOne({ username });

				if (user) return user;

				throw new AuthenticationError();

			} catch (err) {
				throw err;
			}

		} throw new AuthenticationError();
	}
};

export default Users;
