import faker from 'faker';
import mongoose from 'mongoose';
import mockingoose from 'mockingoose';

// tested module
import modelAPIClass from './modelAPI';

describe('ProjectDetailClass', () => {

	const modelFindReturnValue = [{}, {}];
	const Model = {};
	const fields = [];

	describe('init', () => {

		beforeEach(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('isSet return false if not initiated', () => {
			expect(new modelAPIClass(Model, fields).isSet).toEqual(false);
		});
		test('should fail if projectId not provided', () => {
			expect(new modelAPIClass(Model, fields).init()).rejects.toBeInstanceOf(Error);
		});
		test('should set the models from db', async () => {
			const model = await new modelAPIClass(Model, fields).init(mongoose.Types.ObjectId());
			expect(Model.find).toHaveBeenCalled();
			expect(model._models).toMatchObject(modelFindReturnValue);
		});
		test('should fail if no document found', async () => {
			Model.find = jest.fn().mockReturnValue([]);
			const ModelAPI = new modelAPIClass(Model, fields);
			expect(ModelAPI.init(mongoose.Types.ObjectId())).rejects.toBeInstanceOf(Error);
		});
		test('should fail on second call', async () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			const model = await ModelAPI.init(mongoose.Types.ObjectId());
			expect(ModelAPI.init(mongoose.Types.ObjectId())).rejects.toBeInstanceOf(Error);
		});
	});

	describe('isSet', () => {

		afterAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('should return false if not initiated', () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			expect(ModelAPI.isSet).toBe(false);
		});
		test('should return true if initiated', async () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			const model = await ModelAPI.init(mongoose.Types.ObjectId());
			expect(ModelAPI.isSet).toBe(true);
		});
	});

	describe('getLanguageVersion', () => {

		beforeAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('should return model with the selected language', async () => {
			const selectedLanguage = faker.random.locale();
			Model.find = jest.fn().mockReturnValue([{
				language: faker.random.locale(),
			}, {
				language: selectedLanguage,
			}]);
			const ModelAPI = new modelAPIClass(Model, fields);
			const model = await ModelAPI.init(mongoose.Types.ObjectId());
			expect(model.getLanguageVersion(selectedLanguage)).hasOwnProperty('language', selectedLanguage);
		});
	});

	describe('create', () => {
		const projectId = mongoose.Types.ObjectId();
		const title = faker.commerce.productName();

		beforeAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		afterAll(() => {
			Model.create.mockClear();
		});

		test('should fail if language version exists', async () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			await expect(ModelAPI.create(projectId, { title })).rejects.toBeInstanceOf(Error);
		});

		test('should call model create method', async () => {
			Model.create = jest.fn();
			const ModelAPI = new modelAPIClass(Model, fields);
			await ModelAPI.create(projectId, { title });
			expect(Model.create).toHaveBeenCalled();
		});

		test('should create new document', async () => {
			const doc = {
				title,
				projectId,
			};
			Model.create = jest.fn().mockReturnValue(doc);
			const ModelAPI = new modelAPIClass(Model, fields);
			mockingoose.ProjectDetail.toReturn(doc, 'create');
			await ModelAPI.create(projectId, { title });
			Object.keys(doc).forEach((key) => {
				expect(ModelAPI._projectDetail).hasOwnProperty(key, doc[key]);
			});
		});
	});

	describe('remove', () => {
		const projectId = mongoose.Types.ObjectId();
		const title = faker.commerce.productName();

		beforeAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('should fail if not initiated', async () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			await expect(ModelAPI.remove()).rejects.toBeInstanceOf(Error);
		});

		test('should call model remove method', async () => {
			Model.remove = jest.fn();
			const ModelAPI = new modelAPIClass(Model, fields);
			await ModelAPI.init(mongoose.Types.ObjectId());
			await ModelAPI.remove();
			expect(Model.remove).toHaveBeenCalled();
		});

		test('should make isSet return false', async () => {
			const ModelAPI = new modelAPIClass(Model, fields);
			await ModelAPI.init(mongoose.Types.ObjectId());
			Model.find = jest.fn().mockReturnValue([]);
			await ModelAPI.remove();
			expect(ModelAPI.isSet).toBe(false);
		});
	});

	describe('removeLanguageVersion', () => {

		const languages = [faker.random.locale(), faker.random.locale()]; 

		beforeAll(() => {
			Model.find = jest.fn().mockReturnValue([{
				language: languages[0],
			}, {
				language: languages[1],
			}]);
		});

		test('should fail if language version does not exist', async () => {
			const selectedLanguage = 'unreal language';
			const ModelAPI = new modelAPIClass(Model, fields);
			await ModelAPI.init(mongoose.Types.ObjectId());
			expect(ModelAPI.removeLanguageVersion(selectedLanguage)).rejects.toBeInstanceOf(Error);
		});
		test('should call model remove method', async () => {
			Model.remove = jest.fn();
			const ModelAPI = new modelAPIClass(Model, fields);
			await ModelAPI.init(mongoose.Types.ObjectId());
			await ModelAPI.remove();
			expect(Model.remove).toHaveBeenCalled();
		});
	});

	describe('getValue', () => {

		const editableFileds = [faker.lorem.word(), 'testFiled'];
		const languages = [faker.random.locale(), faker.random.locale()];
		const ModelAPI = new modelAPIClass(Model, editableFileds);

		beforeAll(async () => {
			Model.find = jest.fn().mockReturnValue([{
				language: languages[0],
			}, {
				language: languages[1],
			}]);
			await ModelAPI.init(mongoose.Types.ObjectId());
		});

		test('should fail if provided field is not in the editable fields', () => {
			expect(() => ModelAPI.getValue('unreal field')).toThrow();
		});
		test('should return null if language version not found', () => {
			const selectedLanguage = 'unreal language';
			expect(ModelAPI.getValue(editableFileds[0], selectedLanguage)).toBeNull();
		});
		test('should return filed value', async () => {
			Model.find = jest.fn().mockReturnValue([{
				testFiled: 'testValue1',
				language: languages[0],
			}, {
				testFiled: 'testValue2',
				language: languages[1],
			}]);
			const NewModelAPI = new modelAPIClass(Model, editableFileds);
			await NewModelAPI.init(mongoose.Types.ObjectId());
			expect(NewModelAPI.getValue('testFiled', languages[1])).toEqual('testValue2');
		});
	});

	describe('setValue', () => {

		const editableFileds = [faker.lorem.word(), 'testFiled'];
		const languages = [faker.random.locale(), faker.random.locale()];
		const ModelAPI = new modelAPIClass(Model, editableFileds);

		beforeAll(async () => {
			Model.find = jest.fn().mockReturnValue([{
				language: languages[0],
			}, {
				language: languages[1],
			}]);
			await ModelAPI.init(mongoose.Types.ObjectId());
		});

		test('should fail if provided field is not in the editable fields', () => {
			expect(ModelAPI.setValue('unreal field', 'new value')).rejects.toBeInstanceOf(Error);
		});
		test('should return null if language version not found', () => {
			const selectedLanguage = 'unreal language';
			expect(ModelAPI.setValue(editableFileds[0], 'new value', selectedLanguage)).rejects.toBeInstanceOf(Error);
		});
		test('should run update and find method', async () => {
			Model.update = jest.fn();
			Model.find = jest.fn();
			await ModelAPI.setValue(editableFileds[0], 'new value', languages[0]);
			expect(Model.update).toHaveBeenCalled();
			expect(Model.find).toHaveBeenCalled();
		});
	});
});
