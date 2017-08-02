import check from 'check-types';

// models
import User from '../models/user';


export default class UserClass {

	constructor(username) {
		check.assert.string(username);

		this._username = username;
	}

	async _user() {
		try {
			const user = await User.findByUsername(this._username);
			if (user && user.length) return user;
			throw new Error('User not found');
		} catch (err) {
			throw err;
		}
	}
}

