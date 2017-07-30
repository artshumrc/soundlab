import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// tested module
import CollectionDetailClass from './collectionDetail';

describe('CollectionDetailClass', () => {

	const projectId = mongoose.Types.ObjectId();
	const title = faker.commerce.productName();
	const description = faker.commerce.productName();

	describe('create', () => {
		test('ModelAPI create method is called wth correct params', async () => {
			const CollectionDetail = new CollectionDetailClass();
			const ModelAPI = Object.getPrototypeOf(Object.getPrototypeOf(CollectionDetail));
			ModelAPI.create = jest.fn();
			const insertObject = {
				title,
				description,
			};
			await CollectionDetail.create(projectId, insertObject);
			expect(ModelAPI.create).toHaveBeenCalledWith(projectId, insertObject, process.env.DEFAULT_LANGUAGE);
		});
	});
});
