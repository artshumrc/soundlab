import faker from 'faker';
import mongoose from 'mongoose';
import mockingoose from 'mockingoose';

// tested module
import ModelAPIClass from './modelAPI';

describe('ModelAPIClass', () => {

	const modelFindReturnValue = [{}, {}];
	const Model = {};
	const parentFiledName = 'parentFiled';
	const parentId = mongoose.Types.ObjectId();

	describe('init', () => {

		beforeEach(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('isSet return false if not initiated', () => {
			expect(new ModelAPIClass(Model).isSet).toEqual(false);
		});
		test('should fail if parentId and/or parentFiledName not provided', () => {
			expect(new ModelAPIClass(Model).init()).rejects.toBeInstanceOf(Error);
		});
		test('should set the models from db', async () => {
			const model = await new ModelAPIClass(Model).init(parentFiledName, parentId);
			expect(Model.find).toHaveBeenCalled();
			expect(model._models).toMatchObject(modelFindReturnValue);
		});
		test('should fail on second call', async () => {
			const ModelAPI = new ModelAPIClass(Model);
			const model = await ModelAPI.init(parentFiledName, parentId);
			expect(ModelAPI.init(parentFiledName, parentId)).rejects.toBeInstanceOf(Error);
		});
	});

	describe('isSet', () => {

		afterAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		test('should return false if not initiated', () => {
			const ModelAPI = new ModelAPIClass(Model);
			expect(ModelAPI.isSet).toBe(false);
		});
		test('should return true if initiated', async () => {
			const ModelAPI = new ModelAPIClass(Model);
			const model = await ModelAPI.init(parentFiledName, parentId);
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
			const ModelAPI = new ModelAPIClass(Model);
			const model = await ModelAPI.init(parentFiledName, parentId);
			expect(model.getLanguageVersion(selectedLanguage)).hasOwnProperty('language', selectedLanguage);
		});
	});

	describe('create', () => {
		const title = faker.commerce.productName();
		const multilanguageFileds = ['title'];
		const otherFields = [];

		beforeAll(() => {
			Model.find = jest.fn().mockReturnValue(modelFindReturnValue);
		});

		afterAll(() => {
			Model.create.mockClear();
		});

		test('should fail if language version exists', async () => {
			const ModelAPI = new ModelAPIClass(Model);
			await expect(ModelAPI.create({ title })).rejects.toBeInstanceOf(Error);
		});

		test('should call model create method', async () => {
			Model.create = jest.fn();
			const ModelAPI = new ModelAPIClass(Model, multilanguageFileds);
			await ModelAPI.create({ title });
			expect(Model.create).toHaveBeenCalled();
		});

		test('should create new document', async () => {
			const doc = {
				title,
			};
			Model.create = jest.fn().mockReturnValue(doc);
			const ModelAPI = new ModelAPIClass(Model, multilanguageFileds);
			mockingoose.ProjectDetail.toReturn(doc, 'create');
			await ModelAPI.create({ title });
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
			const ModelAPI = new ModelAPIClass(Model);
			await expect(ModelAPI.remove()).rejects.toBeInstanceOf(Error);
		});

		test('should call model remove method', async () => {
			Model.remove = jest.fn();
			const ModelAPI = new ModelAPIClass(Model);
			await ModelAPI.init(parentFiledName, parentId);
			await ModelAPI.remove();
			expect(Model.remove).toHaveBeenCalled();
		});

		test('should make hasModels return false', async () => {
			const ModelAPI = new ModelAPIClass(Model);
			await ModelAPI.init(parentFiledName, parentId);
			Model.find = jest.fn().mockReturnValue([]);
			await ModelAPI.remove();
			expect(ModelAPI.hasModels).toBe(false);
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
			const ModelAPI = new ModelAPIClass(Model);
			await ModelAPI.init(parentFiledName, parentId);
			expect(ModelAPI.removeLanguageVersion(selectedLanguage)).rejects.toBeInstanceOf(Error);
		});
		test('should call model remove method', async () => {
			Model.remove = jest.fn();
			const ModelAPI = new ModelAPIClass(Model);
			await ModelAPI.init(parentFiledName, parentId);
			await ModelAPI.remove();
			expect(Model.remove).toHaveBeenCalled();
		});
	});

	describe('getValue', () => {

		const multilanguageFileds = [faker.lorem.word(), 'testFiled'];
		const languages = [faker.random.locale(), faker.random.locale()];
		const ModelAPI = new ModelAPIClass(Model, multilanguageFileds);

		beforeAll(async () => {
			Model.find = jest.fn().mockReturnValue([{
				language: languages[0],
			}, {
				language: languages[1],
			}]);
			await ModelAPI.init(parentFiledName, parentId);
		});

		test('should fail if provided field is not in the allowed fields', () => {
			expect(() => ModelAPI.getValue('unreal field')).toThrow();
		});
		test('should return null if language version not found', () => {
			const selectedLanguage = 'unreal language';
			expect(ModelAPI.getValue(multilanguageFileds[0], selectedLanguage)).toBeNull();
		});
		test('should return filed value', async () => {
			Model.find = jest.fn().mockReturnValue([{
				testFiled: 'testValue1',
				language: languages[0],
			}, {
				testFiled: 'testValue2',
				language: languages[1],
			}]);
			const NewModelAPI = new ModelAPIClass(Model, multilanguageFileds);
			await NewModelAPI.init(parentFiledName, parentId);
			expect(NewModelAPI.getValue('testFiled', languages[1])).toEqual('testValue2');
		});
	});

	describe('setValue', () => {

		const multilanguageFileds = [faker.lorem.word(), 'multiLanguageTestFiled'];
		const otherFields = ['otherTestFiled'];
		const languages = [faker.random.locale(), faker.random.locale()];
		const ModelAPI = new ModelAPIClass(Model, multilanguageFileds, otherFields);

		beforeAll(async () => {
			Model.find = jest.fn().mockReturnValue([{
				language: languages[0],
			}, {
				language: languages[1],
			}]);
			Model.update = jest.fn();
			await ModelAPI.init(parentFiledName, parentId);
		});

		test('should fail if provided field is not in the allowed fields', () => {
			expect(ModelAPI.setValue('unreal field', 'new value')).rejects.toBeInstanceOf(Error);
		});
		test('should run update method if filed is in the other fields', async () => {
			await ModelAPI.setValue('otherTestFiled', 'new value');
			expect(Model.update).toHaveBeenCalled();
		});
		test('should run update method if filed is in the multi language fields', async () => {
			await ModelAPI.setValue('multiLanguageTestFiled', 'new value', languages[0]);
			expect(Model.update).toHaveBeenCalled();
		});
	});
});
