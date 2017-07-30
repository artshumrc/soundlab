// models
import ProjectDetail from '../models/projectDetail';

// api
import ModelAPIClass from './modelAPI';


export default class ProjectDetailClass extends ModelAPIClass {
	
	/**
	 * ProjectDetailClass constructor: initiates  members.
	 */
	constructor() {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(ProjectDetail, multilanguageFileds, otherFields);

		this._parentFiledName = 'projectId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
