import check from 'check-types';

// models
import Field from '../models/field';

// api
import FieldDetailClass from './fieldDetail';


const _propagateFiledTypeArray = async (filed) => {
	if (filed.type === 'Array') {
		const foundFiled = await Field.findById(filed.arrayFieldId);
		filed.arrayFiled = foundFiled;
	}
	return filed;
};


export default class FieldClass {
	
	constructor() {
		this._field = null;
	}

	async init(filedId, itemSchemaId) {
		check.asser.string(name);
		try {
			const filed = await Field.findOne({ _id: filedId, itemSchemaId });
			if (filed) {
				this._field = await _propagateFiledTypeArray(filed);
				this._filedDetail = await new FieldDetailClass().init(filedId);
				return this;
			}
			throw new Error(`Filed with id: ${filedId} and itemSchemaId: ${itemSchemaId} is not available`);
		} catch (err) {
			throw err;
		}
	}

	get _mogooseType() {
		if (this._field) {
			if (this.isArray) {
				return {
					type: this._field.arrayFiled.type,
					required: this._field.arrayFiled.required,
					default: this._field.arrayFiled.default,
					ref: this._field.arrayFiled.ref,
					enum: this._field.arrayFiled.enum,
					min: this._field.arrayFiled.min,
					max: this._field.arrayFiled.max,
				};
			}
			return this._filed.type;
		}
		throw new Error('Run init method');
	}

	get isArray() {
		if (this._field) {
			if (this._field.type === 'Array') return true;
			return false;
		}
		throw new Error('Run init method');
	}

	get isSet() {
		if (this._field) return true;
		throw new Error('Run init method');
	}

	get mongooseFields() {
		return {
			type: this._mogooseType,
			required: this._field.required,
			default: this._field.default,
			ref: this._field.ref,
			enum: this._field.enum,
			min: this._field.min,
			max: this._field.max,
		};
	}
}

export const getAllItemSchemaFields = async (itemSchemaId) => {
	try {
		const foundFields = await Field.find({ itemSchemaId });
		return Promise.all(foundFields.map(async field => new Field().init(field._id, itemSchemaId)));
	} catch (err) {
		throw err;
	}
};
