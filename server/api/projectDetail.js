import check from 'check-types';
import mongoose from 'mongoose';

// models
import ProjectDetail from '../models/projectDetail';

// api
import ModelAPIClass from './modelAPI';


/**
 * 
 */
export default class ProjectDetailClass extends ModelAPIClass {
	
	/**
	 * ProjectDetailClass constructor: initiates  members.
	 */
	constructor(parentId) {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(ProjectDetail, multilanguageFileds, otherFields);

		this._parentFiledName = 'projectId';
		this._parentId = parentId;
	}

	async init() {
		return super.init(this._parentFiledName, this._parentId);
	}
}
