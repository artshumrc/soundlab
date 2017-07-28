import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// tested module
import TenantClass from './tenant';

describe('TenantClass', () => {

	const projectId = mongoose.Types.ObjectId();
	const name = faker.commerce.productName();

	describe('create', () => {
		test('ModelAPI create method is called wth correct params', async () => {
			const Tenant = new TenantClass();
			const ModelAPI = Object.getPrototypeOf(Object.getPrototypeOf(Tenant));
			ModelAPI.create = jest.fn();
			await Tenant.create(projectId, name);
			expect(ModelAPI.create).toHaveBeenCalledWith(projectId, { name }, process.env.DEFAULT_LANGUAGE);
		});
	});
});
