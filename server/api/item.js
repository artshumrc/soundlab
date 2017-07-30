// api
import MultilanguageModelClass from './multilanguageModel';


export default class ItemClass extends MultilanguageModelClass {
	
	constructor() {
		const multilanguageFileds = ['title'];

		const otherFields = []; // TODO generate based on itemScehma
		// TODO generate Item model from ItemSchema and base fields:
		const Item = null;
		super(Item, multilanguageFileds, otherFields);

		this._parentFiledName = 'collectionId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
