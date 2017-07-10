import check from 'check-types';

// models
import User from '../models/user';

// errors
import { AuthenticationError } from '../errors';

/**
 * Validate user based on his username
 * @param  {String} username The username of the user
 * @return {Object}          The user object from db
 */
export async function validateUser(username) {

	if (username && check.string(username)) {
		try {
			const user = await User.findOne({ username });

			if (user) return user;

			throw new AuthenticationError();

		} catch (err) {
			throw err;
		}

	} throw new AuthenticationError();
}
