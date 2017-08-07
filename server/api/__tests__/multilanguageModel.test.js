import faker from 'faker';
import mongoose from 'mongoose';

// tested module
import MultilanguageModelClass from '../multilanguageModel';

describe('MultilanguageModelClass', () => {

	const parentFiledName = 'parentFiled';
	const parentId = mongoose.Types.ObjectId();
	const multilanguageFields = ['title'];
	const otherFields = ['show'];
	const userRole = 'Owner';

	const language = process.env.DEFAULT_LANGUAGE;

	const title = faker.commerce.productName();
	const params = {
		title,
	};

	const field = 'title';
	const value = faker.commerce.productName();

	const otherField = 'show';

	const Model = function() {};
	const languages = [faker.random.locale(), faker.random.locale()]; 
	const modelFindReturnValue = [{
		title,
		language: languages[0],
	}, {
		language: languages[1],
	}];
	Model.find = jest.fn().mockReturnValue(modelFindReturnValue);


	describe('create', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.create(params, language)).resolves.toBeNull();
		});

		test('should throw Error, if a param is not in multilanguageFields or otherFields', () => {
			const incorrectParams = {
				notTitle: faker.commerce.productName(),
			};
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.create(incorrectParams, language)).rejects.toThrow();
		});

		test('should throw Error, if language version already exists', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.create(params, languages[0])).rejects.toThrow();
		});

		test('should call model.create method', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.create = jest.fn();
			await multilanguageModel.create(params, language);
			expect(Model.create).toHaveBeenCalled();
		});
	});


	describe('removeAll', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.removeAll()).resolves.toBeNull();
		});

		test('should call model.remove method', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.remove = jest.fn();
			await multilanguageModel.removeAll();
			expect(Model.remove).toHaveBeenCalled();
		});
	});


	describe('removeLanguageVersion', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.removeLanguageVersion(languages[0])).resolves.toBeNull();
		});

		test('should throw Error, if language version not found', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.removeLanguageVersion(language)).resolves.toBeNull();
		});

		test('should call model.remove method', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.remove = jest.fn();
			await multilanguageModel.removeLanguageVersion(languages[0]);
			expect(Model.remove).toHaveBeenCalled();
		});
	});


	describe('setValue', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.setValue(field, value, language)).resolves.toBeNull();
		});

		test('should throw Error, if language version not found', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue(field, value, language)).rejects.toThrow();
		});

		test('should call model.update method, if filed is in multilanguageFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.update = jest.fn();
			await multilanguageModel.setValue(field, value, languages[0]);
			expect(Model.update).toHaveBeenCalled();
		});

		test('should call model.update method, if filed is in otherFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.update = jest.fn();
			await multilanguageModel.setValue(otherField, value, languages[0]);
			expect(Model.update).toHaveBeenCalled();
		});

		test('should throw Error, if field is not in multilanguageFields or otherFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue('incorrectField', value, languages[0])).rejects.toThrow();
		});
	});


	describe('setValue', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.setValue(field, value, language)).resolves.toBeNull();
		});

		test('should throw Error, if language version not found', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue(field, value, language)).rejects.toThrow();
		});

		test('should call model.update method, if filed is in multilanguageFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.update = jest.fn();
			await multilanguageModel.setValue(field, value, languages[0]);
			expect(Model.update).toHaveBeenCalled();
		});

		test('should call model.update method, if filed is in otherFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			Model.update = jest.fn();
			await multilanguageModel.setValue(otherField, value, languages[0]);
			expect(Model.update).toHaveBeenCalled();
		});

		test('should throw Error, if field is not in multilanguageFields or otherFields', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue('incorrectField', value, languages[0])).rejects.toThrow();
		});
	});


	describe('getValue', () => {

		test('should return null, if user is not an Owner', () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, null);
			expect(multilanguageModel.getValue(field, languages[0])).resolves.toBeNull();
		});

		test('should return null, if incorrect filed', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue('incorrectField', language)).rejects.toBeNull();
		});

		test('should return null, if language version not found', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue(field, language)).rejects.toBeNull();
		});

		test('should return correct value', async () => {
			const multilanguageModel = new MultilanguageModelClass(Model, parentFiledName, parentId, multilanguageFields, otherFields, userRole);
			expect(multilanguageModel.setValue(field, value, languages[0])).resolves.toEqual(title);
		});
	});
});
