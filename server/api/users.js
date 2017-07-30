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
				const user = await User.findOne({ username });

				if (user) return user;

				throw new AuthenticationError();

			} catch (err) {
				throw err;
			}

		} throw new AuthenticationError();
	},
	async findById(_id) {
		if (_id) {
			try {
				const user = await User.findById(_id);

				if (user) return user;

				throw new Error('User not found');
			} catch (err) {
				throw err;
			}
		}
	}
};

export default Users;
