import ProjectDetailClass from './projectDetail';

// models
jest.mock('../models/projectDetail');

it('first test', () => {
	const projectDetail = {
		title: 'Test title',
	};
	const ProjectDetail = new ProjectDetailClass(projectDetail);
	expect(ProjectDetail.title).toEqual('Test title');
});
