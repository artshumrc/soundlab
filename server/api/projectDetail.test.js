import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// tested module
import ProjectDetailClass from './projectDetail';

describe('ProjectDetailClass', () => {

	const projectId = mongoose.Types.ObjectId();
	const title = faker.commerce.productName();

	describe('create', () => {
		test('ModelAPI create method is called wth correct params', async () => {
			const ProejctDeatil = new ProjectDetailClass();
			const ModelAPI = Object.getPrototypeOf(Object.getPrototypeOf(ProejctDeatil));
			ModelAPI.create = jest.fn();
			await ProejctDeatil.create(projectId, title);
			expect(ModelAPI.create).toHaveBeenCalledWith(projectId, { title }, process.env.DEFAULT_LANGUAGE);
		});
	});
});
