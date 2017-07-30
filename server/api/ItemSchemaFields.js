// models
import ItemSchemaFields from '../models/itemSchemaFields';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class CollectionDetailClass extends MultilanguageModelClass {
	
	constructor() {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(ItemSchemaFields, multilanguageFileds, otherFields);

		this._parentFiledName = 'itemSchemaId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
