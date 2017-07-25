import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// tested module
import ProjectDetailClass from './projectDetail';

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

		test('should update projectDetail', async () => {
			const ProjectDetail = new ProjectDetailClass();
			const updatedProjectDetail = {
				title,
				projectId,
			};
			mockingoose.ProjectDetail.toReturn(updatedProjectDetail, 'create');
			await ProjectDetail.create(projectId, title);
			Object.keys(updatedProjectDetail).forEach((key) => {
				expect(ProjectDetail.__projectDetail).toHaveProperty(key, updatedProjectDetail[key]);
			});
		});
	});
});

