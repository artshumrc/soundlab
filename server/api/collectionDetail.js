// models
import CollectionDetail from '../models/collectionDetail';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class CollectionDetailClass extends MultilanguageModelClass {
	
	constructor() {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(CollectionDetail, multilanguageFileds, otherFields);

		this._parentFiledName = 'collectionId';
		this._parentId = null;
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
