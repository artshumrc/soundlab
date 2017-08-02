// models
import CollectionDetail from '../models/collectionDetail';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class CollectionDetailClass extends MultilanguageModelClass {
	
	constructor(parentId) {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(CollectionDetail, 'collectionId', parentId, multilanguageFileds, otherFields);
	}
}
