import mongoose from 'mongoose';

// models
import Project from '../models/project';

// api
import ProjectDetailClass from './projectDetail';
import { getAllProjectTenants } from './tenant';


export default class ProjectClass {

	constructor(projectId, userId) {
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');
		if (!mongoose.Types.ObjectId.isValid(userId)) throw new Error('Incorrect userId');

		this._projectId = projectId;
		this._userId = userId;

		this._projectDetail = new ProjectDetailClass(projectId);
	}

	async _project() {
		try {
			const project = await Project.findOne({ _id: this._projectId, users: { $elemMatch: { userId: this._userId } } });
			if (project && project.length) return project;
			throw new Error('Project not found');
		} catch (err) {
			throw err;
		}
	}

	async _tenants() {
		try {
			const tenants = await getAllProjectTenants(this._projectId);
			if (tenants && tenants.length) return tenants;
			throw new Error('Tenants not found');
		} catch (err) {
			throw err;
		}
	}

	async userRole() {
		try {
			const project = await this._project();
			const projectUser = project.users.find(user => user.userId === this._userId);
			return projectUser.role;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}

export const getAllUserProjects = async (userId) => {
	if (!mongoose.Types.ObjectId.isValid(userId)) throw new Error('Incorrect userId');

	try {
		const foundProjects = await Project.find({ users: userId });
		return foundProjects.map(async project => new Project(project._id, userId));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
