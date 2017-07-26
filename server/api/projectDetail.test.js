import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// model
import ProjectDetailModel from '../models/projectDetail';

// tested module
import ProjectDetailClass, { getProjectDetails } from './projectDetail';

describe('ProjectDetailClass', () => {

	describe('isSet', () => {
		test('return false if projectDetail is not set', () => {
			const ProjectDetail = new ProjectDetailClass();
			expect(ProjectDetail.isSet).toEqual(false);
		});
		test('return true if projectDetail is set', () => {
			const ProjectDetail = new ProjectDetailClass({});
			expect(ProjectDetail.isSet).toEqual(true);
		});
	});

	describe('getters and setters', () => {
		describe('Title', () => {
			const title = faker.commerce.productName();
			const projectDetail = {
				title,
			};
			const ProjectDetail = new ProjectDetailClass(projectDetail);

			test('get title', () => {
				expect(ProjectDetail.title).toEqual(title);
			});

			test('get title should return null if projectDetail not set', () => {
				expect(new ProjectDetailClass().title).toBeNull();
			});

			test('setTitle', async () => {
				const newTitle = faker.commerce.productName();
				const updatedProjectDetail = {
					title: newTitle,
				};
				mockingoose.ProjectDetail.toReturn(updatedProjectDetail, 'update');
				await ProjectDetail.setTitle(newTitle);
				expect(ProjectDetail.title).toEqual(newTitle);
			});
		});

		describe('Description', () => {
			const description = faker.lorem.text();
			const projectDetail = {
				description,
			};
			const ProjectDetail = new ProjectDetailClass(projectDetail);

			test('get description', () => {
				expect(ProjectDetail.description).toEqual(description);
			});

			test('get description should return null if projectDetail not set', () => {
				expect(new ProjectDetailClass().description).toBeNull();
			});

			test('setDescription', async () => {
				const newDescription = faker.lorem.text();
				const updatedProjectDetail = {
					description: newDescription,
				};
				mockingoose.ProjectDetail.toReturn(updatedProjectDetail, 'update');
				await ProjectDetail.setDescription(newDescription);
				expect(ProjectDetail.description).toEqual(newDescription);
			});
		});

		describe('Language', () => {
			const language = faker.lorem.word();
			const projectDetail = {
				language,
			};
			const ProjectDetail = new ProjectDetailClass(projectDetail);

			test('get language', () => {
				expect(ProjectDetail.language).toEqual(language);
			});

			test('get language should return null if projectDetail not set', () => {
				expect(new ProjectDetailClass().language).toBeNull();
			});

			test('setDescription', async () => {
				const newLanguage = faker.lorem.word();
				const updatedProjectDetail = {
					language: newLanguage,
				};
				mockingoose.ProjectDetail.toReturn(updatedProjectDetail, 'update');
				await ProjectDetail.setLanguage(newLanguage);
				expect(ProjectDetail.language).toEqual(newLanguage);
			});
		});
	});

	describe('create', () => {
		const projectId = mongoose.Types.ObjectId();
		const title = faker.commerce.productName();

		test('should fail if projectDetail already set', async () => {
			const ProjectDetail = new ProjectDetailClass({});
			await expect(ProjectDetail.create(projectId, title)).rejects.toBeInstanceOf(Error);
		});

		test('should call model create method', async () => {
			const ProjectDetail = new ProjectDetailClass();
			ProjectDetailModel.create = jest.fn();
			await ProjectDetail.create(projectId, title);
			expect(ProjectDetailModel.create).toHaveBeenCalled();
		});

		test('should update projectDetail', async () => {
			const ProjectDetail = new ProjectDetailClass();
			const updatedProjectDetail = {
				title,
				projectId,
			};
			mockingoose.ProjectDetail.toReturn(updatedProjectDetail, 'create');
			await ProjectDetail.create(projectId, title);
			Object.keys(updatedProjectDetail).forEach((key) => {
				expect(ProjectDetail.__projectDetail).hasOwnProperty(key, updatedProjectDetail[key]);
			});
		});
	});

	describe('remove', () => {
		const projectId = mongoose.Types.ObjectId();
		const title = faker.commerce.productName();

		test('should fail if projectDetail is not set', async () => {
			const ProjectDetail = new ProjectDetailClass();
			await expect(ProjectDetail.remove()).rejects.toBeInstanceOf(Error);
		});

		test('should call model remove method', async () => {
			const ProjectDetail = new ProjectDetailClass({});
			ProjectDetailModel.remove = jest.fn();
			await ProjectDetail.remove();
			expect(ProjectDetailModel.remove).toHaveBeenCalled();
		});

		test('should update projectDetail to be null', async () => {
			const ProjectDetail = new ProjectDetailClass({});
			mockingoose.ProjectDetail.toReturn(1, 'remove');
			await ProjectDetail.remove(projectId, title);
			expect(ProjectDetail.__projectDetail).toBeNull();
		});
	});
});

describe('getProjectDetails', () => {
	test('should fail if run with no argument ', () => {
		expect(getProjectDetails()).rejects.toBeInstanceOf(Error);
	});

	test('should return array of ProjectDetailClass with isSet equal to true', async () => {
		mockingoose.ProjectDetail.toReturn([{}, {}], 'find');
		const projectId = mongoose.Types.ObjectId();
		const projectDetails = await getProjectDetails(projectId);
		projectDetails.forEach((projDetail) => {
			expect(projDetail.isSet).toEqual(true);
		});
	});
});
