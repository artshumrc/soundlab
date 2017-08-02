// models
import FieldDetail from '../models/fieldDetail';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class FieldDetailClass extends MultilanguageModelClass {
	
	constructor(parentId) {
		const multilanguageFileds = ['label', 'description'];
		const otherFields = [];
		super(FieldDetail, 'fieldId', parentId, multilanguageFileds, otherFields);
	}
}
