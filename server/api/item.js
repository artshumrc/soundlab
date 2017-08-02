// api
import MultilanguageModelClass from './multilanguageModel';


export default class ItemClass extends MultilanguageModelClass {
	
	constructor(ItemModel, parentId, multilanguageFields, otherFields, userRole) {
		super(ItemModel, 'collectionId', parentId, multilanguageFields, otherFields, userRole);
	}
}
