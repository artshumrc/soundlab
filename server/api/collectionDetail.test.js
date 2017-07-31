import mongoose from 'mongoose';

// tested module
import CollectionDetailClass from './collectionDetail';

describe('CollectionDetailClass', () => {

	const collectionId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call multilanguageModel init method correct params', async () => {
			const CollectionDetail = new CollectionDetailClass();
			const multilanguageModel = Object.getPrototypeOf(Object.getPrototypeOf(CollectionDetail));
			multilanguageModel.init = jest.fn();
			await CollectionDetail.init(collectionId);
			expect(multilanguageModel.init).toHaveBeenCalledWith('collectionId', collectionId);
		});
	});
});
