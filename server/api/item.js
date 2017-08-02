// api
import MultilanguageModelClass from './multilanguageModel';


export default class ItemClass extends MultilanguageModelClass {
	
	constructor(ItemModel, parentId, multilanguageFields, otherFields) {
		super(ItemModel, 'collectionId', parentId, multilanguageFields, otherFields);
	}
}
