import faker from 'faker';
import mongoose from 'mongoose';

// tested module
import FieldClass, { getAllItemSchemaFields } from '../field';

// models
import Field from '../../models/field';

describe('FieldClass', () => {

	const fieldId = mongoose.Types.ObjectId();
	const itemSchemaId = mongoose.Types.ObjectId();
	const userRole = 'Owner';

	afterAll(() => {
		Field.mockRestore();
	});


	describe('getMongooseFields', () => {
		test('should return Object with type as String', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				type: 'String'
			});
			expect(field.getMongooseFields()).resolves.toMatchObject({
				type: String,
			});
		});
		test('should return Object with type as Number', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				type: 'Number'
			});
			expect(field.getMongooseFields()).resolves.toMatchObject({
				type: Number,
			});
		});
		test('should return Object with type as Date', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				type: 'Date'
			});
			expect(field.getMongooseFields()).resolves.toMatchObject({
				type: Date,
			});
		});
		test('should return Object with type as mongoose.Types.ObjectId', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				type: 'ObjectId'
			});
			expect(field.getMongooseFields()).resolves.toMatchObject({
				type: mongoose.Types.ObjectId,
			});
		});
		test('should return Object with type as ???', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				type: 'Array'
			});
			Field.findById = jest.fn().mockReturnValue({
				type: 'String'
			});
			expect(field.getMongooseFields()).resolves.toMatchObject({
				type: [{
					type: String,
				}],
			});
		});
	});


	describe('isMultilanguage', () => {
		test('should return false if filed is not multilanguage', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				multilanguage: false,
			});
			expect(field.isMultilanguage()).resolves.toBeFalsy();
		});
		test('should return true if filed is multilanguage', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			Field.findOne = jest.fn().mockReturnValue({
				multilanguage: true,
			});
			expect(field.isMultilanguage()).resolves.toBeTruthy();
		});
	});


	describe('id', () => {
		test('should return fieldId', () => {
			const field = new FieldClass(fieldId, itemSchemaId, userRole);
			expect(field.id).toBe(fieldId);
		});
	});
});

describe('getAllItemSchemaFields', () => {

	const itemSchemaId = mongoose.Types.ObjectId();
	const userRole = 'Owner';

	Field.find = jest.fn().mockReturnValue([{
		_id: mongoose.Types.ObjectId(),
	}, {
		_id: mongoose.Types.ObjectId(),
	}]);

	afterAll(() => {
		Field.mockRestore();
	});

	test('should return an Array of Field instances', async () => {
		const fields = await getAllItemSchemaFields(itemSchemaId, userRole);
		fields.forEach((field) => {
			expect(field).toBeInstanceOf(FieldClass);
		});
	});

});
