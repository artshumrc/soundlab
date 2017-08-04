import mongoose from 'mongoose';
import check from 'check-types';

// models
import Field from '../models/field';

// api
import FieldDetailClass from './fieldDetail';


const _propagateFieldTypeArray = async (field) => {
	if (field.type === 'Array') {
		const foundField = await Field.findById(field.arrayFieldId);
		field.arrayField = foundField;
	}
	return field;
};

const _getMongooseTypeFromString = (stringType) => {
	let type = null;
	switch (stringType) {
	case 'String':
		type = String;
		break;
	case 'Number':
		type = Number;
		break;
	case 'Date':
		type = Date;
		break;
	case 'Boolean':
		type = Boolean;
		break;
	case 'ObjectId':
		type = mongoose.Types.ObjectId;
		break;
	}
	return type;
};


export default class FieldClass {
	
	constructor(fieldId, itemSchemaId, userRole) {
		if (!mongoose.Types.ObjectId.isValid(fieldId)) throw new Error('Incorrect field id');
		if (!mongoose.Types.ObjectId.isValid(itemSchemaId)) throw new Error('Incorrect itemSchema id');

		this._fieldId = fieldId;
		this._itemSchemaId = itemSchemaId;
		this._userRole = userRole;

		this._fieldDetail = new FieldDetailClass(fieldId, this._userRole);

		this._isArray = null;
		this._isMultilanguage = null;
	}

	async _fieldDoc() {
		try {
			const field = await Field.findOne({ _id: this._fieldId, _itemSchemaId: this._itemSchemaId });
			if (field) {
				this._setProps(field);
				return _propagateFieldTypeArray(field);
			}
			throw new Error('Field not found');
		} catch (err) {
			throw err;
		}
	}

	_setProps(field) {
		// _isArray
		if (field.type === 'Array') this._isArray = true;
		else this._isArray = false;

		// _isMultilanguage
		this._isMultilanguage = field.multilanguage;
	}

	_getMongooseType(field) {
		if (this._isArray) {
			return [{
				type: _getMongooseTypeFromString(field.arrayField.type),
				required: field.arrayField.required,
				default: field.arrayField.default,
				ref: field.arrayField.ref,
				enum: field.arrayField.enum,
				min: field.arrayField.min,
				max: field.arrayField.max,
			}];
		}
		return _getMongooseTypeFromString(field.type);
	}

	async getMongooseFields() {
		try {
			const field = await this._fieldDoc();
			return {
				type: this._getMongooseType(field),
				required: field.required,
				default: field.default,
				ref: field.ref,
				enum: field.enum,
				min: field.min,
				max: field.max,
			};
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async isMultilanguage() {
		try {
			await this._fieldDoc();
			return this._isMultilanguage;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	get id() {
		return this._fieldId;
	}
}

export const getAllItemSchemaFields = async (itemSchemaId, userRole) => {
	if (!mongoose.Types.ObjectId.isValid(itemSchemaId)) throw new Error('Incorrect itemSchemaId');
	check.assert.string(userRole);

	try {
		const foundFields = await Field.find({ itemSchemaId });
		return foundFields.map(field => new FieldClass(field._id, itemSchemaId, userRole));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
