// models
import ProjectDetail from '../models/projectDetail';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class ProjectDetailClass extends MultilanguageModelClass {
	
	/**
	 * ProjectDetailClass constructor: initiates  members.
	 */
	constructor(parentId, userRole) {
		const multilanguageFileds = ['title', 'description'];
		const otherFields = [];
		super(ProjectDetail, 'projectId', parentId, multilanguageFileds, otherFields, userRole);
	}
}
