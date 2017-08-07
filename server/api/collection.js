import mongoose from 'mongoose';

// models
import Collection from '../models/collection';

// api
import CollectionDetailClass from './collectionDetail';
import ItemSchemaClass from './itemSchema';


export default class CollectionClass {
	
	constructor(collectionId, projectId, userRole) {
		if (!mongoose.Types.ObjectId.isValid(collectionId)) throw new Error('Incorrect collectionId');
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');

		this._collectionId = collectionId;
		this._projectId = projectId;
		this._userRole = userRole;

		this._collectionDetail = new CollectionDetailClass(this._collectionId, this._userRole);
	}

	async _collectionDoc() {
		try {
			const collection = await Collection.findOne({ _id: this._collectionId, _projectId: this._projectId });
			if (collection && collection.length) return collection;
			throw new Error('Collection not found');
		} catch (err) {
			throw err;
		}
	}

	async _itemSchemaId() {
		try {
			const collection = await this._collectionDoc();
			return collection.itemSchemaId;
		} catch (err) {
			throw err;
		}
	}

	async _itemSchema() {
		try {
			const _itemSchemaId = await this._itemSchemaId();
			return new ItemSchemaClass(_itemSchemaId, this._userRole);
		} catch (err) {
			throw err;
		}
	}

	// TODO - this.items + pagination
	

	get id() {
		return this._collectionId;
	}

}

export const getAllProjectCollections = async (projectId, userRole) => {
	try {
		const foundCollection = await Collection.find({ projectId });
		return foundCollection.map(collection => new Collection(collection._id, projectId, userRole));
	} catch (err) {
		throw err;
	}
};
