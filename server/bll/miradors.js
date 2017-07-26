// models
import Mirador from '../models/mirador';

// errors
import { AuthenticationError } from '../errors';

// bll
import Users from './users';

const Miradors = {

	async create(username, mirador) {

		try {
			const user = await Users.validateUser(username);

			if (user) return new Mirador(mirador).save();

		} catch (err) {
			throw err;
		}
	},
	findById(_id) {
		if (_id) {
			return Mirador.findById(_id);
		}
		throw new Error('_id not specified');
	},

};

export default Miradors;
