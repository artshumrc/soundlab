import mongoose from 'mongoose';

// tested module
import TenantClass from '../tenant';

describe('TenantClass', () => {

	const projectId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call multilanguageModel init method correct params', async () => {
			const Tenant = new TenantClass();
			const multilanguageModel = Object.getPrototypeOf(Object.getPrototypeOf(Tenant));
			multilanguageModel.init = jest.fn();
			await Tenant.init(projectId);
			expect(multilanguageModel.init).toHaveBeenCalledWith('projectId', projectId);
		});
	});
});
