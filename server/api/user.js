// models
import User from '../models/user';


export default class UserClass {

	constructor() {
		this._user = null;
	}

	async init(username) {
		try {
			const user = await User.find({ username });
			if (user) {
				this._user = user;
				return this;
			}
			throw new Error(`User with name: ${username} is not available`);
		} catch (err) {
			throw err;
		}
	}
}

