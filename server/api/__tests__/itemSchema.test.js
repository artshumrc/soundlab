import faker from 'faker';
import mongoose from 'mongoose';

// tested module
import ItemSchemaClass from '../itemSchema';

// models
import ItemSchema from '../../models/itemSchema';
import Field from '../../models/field';


describe('FieldClass', () => {

	const itemSchemaId = mongoose.Types.ObjectId();
	const userRole = 'Owner';

	Field.find = jest.fn().mockReturnValue([{
		_id: mongoose.Types.ObjectId(),
		type: 'String'
	}]);

	Field.findOne = jest.fn().mockReturnValue({
		_id: mongoose.Types.ObjectId(),
		type: 'String'
	});

	afterAll(() => {
		Field.mockRestore();
	});


	describe('getItemModel', () => {
		test('should not cause any error', async () => {
			const itemSchema = new ItemSchemaClass(itemSchemaId, userRole);
			await itemSchema.getItemModel();
		});
	});


	describe('getMultilanguageFields', () => {

	});


	describe('getNonMultilanguageFields', () => {

	});
});
