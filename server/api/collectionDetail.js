import check from 'check-types';
import mongoose from 'mongoose';

// models
import CollectionDetail from '../models/collectionDetail';

// api
import ModelAPIClass from './modelAPI';


/**
 * 
 */
export default class CollectionDetailClass extends ModelAPIClass {
	
	/**
	 * ProjectDetailClass constructor: initiates  members.
	 */
	constructor() {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(CollectionDetail, multilanguageFileds, otherFields);

		this._parentFiledName = 'collectionId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
