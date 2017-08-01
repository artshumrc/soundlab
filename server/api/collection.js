import check from 'check-types';

// models
import Collection from '../models/collection';

// api
import CollectionDetailClass from './collectionDetail';
import ItemSchemaClass from './itemSchema';


export default class CollectionClass {
	
	constructor() {
		this._collection = null;
		this._collectionDetail = null;
		this._itemSchema = null;
	}

	async init(collectionId, projectId) {
		check.asser.string(name);
		try {
			const collection = await Collection.findOne({ _id: collectionId, projectId });
			if (collection) {
				this._collection = collection;
				this._collectionDetail = await new CollectionDetailClass().init(collectionId);
				this._itemSchema = await new ItemSchemaClass().init(collection.itemSchemaId);
				// IMPORTANT - don NOT store all Items in an js object, because there can be a lot of them
				// TODO - Item pagination
				return this;
			}
			throw new Error(`Collection with id: ${collectionId} and projectId: ${projectId} is not available`);
		} catch (err) {
			throw err;
		}
	}
}

export const getAllProjectCollections = async (projectId) => {
	try {
		const foundCollection = await Collection.find({ projectId });
		return Promise.all(foundCollection.map(async collection => new Collection().init(collection._id, projectId)));
	} catch (err) {
		throw err;
	}
};
