// models
import FieldDetail from '../models/fieldDetail';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class FieldDetailClass extends MultilanguageModelClass {
	
	constructor() {
		const multilanguageFileds = ['label', 'description'];
		const otherFields = [];
		super(FieldDetail, multilanguageFileds, otherFields);

		this._parentFiledName = 'fieldId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
