import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// tested module
import CollectionDetailClass from './collectionDetail';

describe('CollectionDetailClass', () => {

	const collectionId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call ModelAPI init method correct params', async () => {
			const CollectionDetail = new CollectionDetailClass();
			const ModelAPI = Object.getPrototypeOf(Object.getPrototypeOf(CollectionDetail));
			ModelAPI.init = jest.fn();
			await CollectionDetail.init(collectionId);
			expect(ModelAPI.init).toHaveBeenCalledWith('collectionId', collectionId);
		});
	});
});
