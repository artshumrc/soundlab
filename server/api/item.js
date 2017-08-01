// api
import MultilanguageModelClass from './multilanguageModel';


export default class ItemClass extends MultilanguageModelClass {
	
	constructor(ItemModel) {
		const multilanguageFileds = ['title'];

		const otherFields = []; // TODO generate based on itemScehma
		super(ItemModel, multilanguageFileds, otherFields);

		this._parentFiledName = 'collectionId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
