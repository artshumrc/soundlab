import check from 'check-types';

// models
import Field from '../models/field';

// api
import FieldDetailClass from './fieldDetail';

export default class FieldClass {
	
	constructor() {
		this._field = null;
	}

	async init(filedId, itemSchemaId) {
		check.asser.string(name);
		try {
			const filed = await Field.findOne({ _id: filedId, itemSchemaId });
			if (filed) {
				this._field = filed;
				this._filedDetail = await new FieldDetailClass().init(filedId);
				return this;
			}
			throw new Error(`Filed with id: ${filedId} and itemSchemaId: ${itemSchemaId} is not available`);
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this._field) return true;
		throw new Error('Run init method');
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
