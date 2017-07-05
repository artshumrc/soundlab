import check from 'check-types';

// models
import User from '../models/user';


export async function validateUser(username, validMethod) {

	if (username && check.string(username)) {
		try {
			const user = await User.findOne({ username });

			if (user) {

				return validMethod();

			} throw new AuthenticationError();

		} catch (err) {
			throw new Error(err);
		}

	} throw new AuthenticationError();
}
