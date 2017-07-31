import mongoose from 'mongoose';

// tested module
import ProjectDetailClass from '../tenant';

describe('ProjectDetailClass', () => {

	const projectId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call multilanguageModel init method correct params', async () => {
			const ProjectDetail = new ProjectDetailClass();
			const multilanguageModel = Object.getPrototypeOf(Object.getPrototypeOf(ProjectDetail));
			multilanguageModel.init = jest.fn();
			await ProjectDetail.init(projectId);
			expect(multilanguageModel.init).toHaveBeenCalledWith('projectId', projectId);
		});
	});
});
