import check from 'check-types';

// models
import User from '../models/user';


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
