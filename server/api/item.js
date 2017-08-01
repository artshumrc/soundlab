// api
import MultilanguageModelClass from './multilanguageModel';


export default class ItemClass extends MultilanguageModelClass {
	
	constructor(ItemModel, multilanguageFields, otherFields) {
		super(ItemModel, multilanguageFields, otherFields);

		this._parentFiledName = 'collectionId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
