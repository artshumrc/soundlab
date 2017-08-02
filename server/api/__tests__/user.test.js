import faker from 'faker';
import mongoose from 'mongoose';

// tested module
import UserClass from '../user';

describe('UserClass', () => {

	const username = faker.internet.userName();

	// const collectionId = mongoose.Types.ObjectId();

	describe('_userDoc', () => {
		// test('should return null if no username in constructor', async () => {
		// 	const user = new UserClass();
		// 	console.log('user._userDoc()', user._userDoc());
		// });
		test('should TODO', async () => {
			const user = new UserClass(username);
			console.log('user._userDoc()', user._userDoc());
		});
	});
});
