import faker from 'faker';

// models
import User from '../models/user';

// utils
import { canSeed, generateData, notEmptyError } from './utils';


const _registerUserPromiseWrapper = ({ username, password }) => {
	return new Promise((resolve, reject) => {
		User.register(new User({
			username: username,
		}), password, (err, account) => {
			if (err) reject(err);
			if (account) resolve(account);
		});
	});
};

const _insertData = async data => Promise.all(
	data.map(async (item) => {
		try {
			const account = await _registerUserPromiseWrapper(item);
			return account._id;
		} catch (err) {
			throw err;
		}
	})
);

const generateUsers = async (count) => {
	if (await canSeed(User)) {

		const data = await generateData(count, async () => ({
			username: faker.internet.email(),
			password: faker.internet.password(),
		}));

		try {
			const userIds = await _insertData(data);
			return userIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('User');
};

export default generateUsers;
