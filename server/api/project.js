// import check from 'check-types';

// models
import Project from '../models/project';

// api
import ProjectDetailClass from './projectDetail';
import { getAllProjectTenants } from './tenant';


export default class ProjectClass {

	constructor() {
		this._project = null;
		this._projectDetail = null;
		this._tenant = null;
		this._userId = null;
	}

	async init(projectId, userId) {
		try {
			const project = await Project.findOne({ _id: projectId, users: { $elemMatch: { userId } } });
			if (project) {
				this._project = project;
				this._userId = userId;
				this._projectDetail = await new ProjectDetailClass().init(projectId);
				this._tenant = await getAllProjectTenants(projectId);
				return this;
			}
			throw new Error(`Project with id: ${projectId} and userId: ${userId} is not available`);
		} catch (err) {
			throw err;
		}
	}

	get userRole() {
		if (this._project) {
			const projectUser = this._project.users.find(user => user.userId === this._userId);
			return projectUser.role;
		}
		throw new Error('Run init method');
	}
}

export const getAllUserProjects = async (userId) => {
	try {
		const foundProjects = await Project.find({ users: userId });
		return Promise.all(foundProjects.map(async project => new Project().init(project._id, userId)));
	} catch (err) {
		throw err;
	}
};
