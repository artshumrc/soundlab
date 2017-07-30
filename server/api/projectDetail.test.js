import mongoose from 'mongoose';

// tested module
import ProjectDetailClass from './tenant';

describe('ProjectDetailClass', () => {

	const projectId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call ModelAPI init method correct params', async () => {
			const Tenant = new ProjectDetailClass();
			const ModelAPI = Object.getPrototypeOf(Object.getPrototypeOf(Tenant));
			ModelAPI.init = jest.fn();
			await Tenant.init(projectId);
			expect(ModelAPI.init).toHaveBeenCalledWith('projectId', projectId);
		});
	});
});
