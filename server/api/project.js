import mongoose from 'mongoose';

// models
import Project from '../models/project';

// api
import ProjectDetailClass from './projectDetail';
import { getAllProjectTenants } from './tenant';
import { getAllProjectCollections } from './collection';


export default class ProjectClass {

	constructor(projectId, userId) {
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');
		if (!mongoose.Types.ObjectId.isValid(userId)) throw new Error('Incorrect userId');

		this._projectId = projectId;
		this._userId = userId;

		this._projectDetail = new ProjectDetailClass(projectId, this._userId);
	}

	async _projectDoc() {
		try {
			const project = await Project.findOne({ _id: this._projectId });
			if (project && project.length) return project;
			throw new Error('Project not found');
		} catch (err) {
			throw err;
		}
	}

	async _tenants() {
		const userRole = await this.userRole;
		if (!userRole === 'Owner') return null;

		try {
			const tenants = await getAllProjectTenants(this._projectId, userRole);
			if (tenants && tenants.length) return tenants;
			throw new Error('Tenants not found');
		} catch (err) {
			throw err;
		}
	}

	async _tenant(tenantId) {
		try {
			const tenants = await this._tenants();
			return tenants.find(tenant => tenant.id === tenantId);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	get tenants() {
		return this._tenants();
	}

	getTenant(tenantId) {
		if (!mongoose.Types.ObjectId.isValid(tenantId)) throw new Error('Incorrect tenantId');
		return this._tenant(tenantId);
	}

	async _collections() {
		try {
			const collections = await getAllProjectCollections(this._projectId, await this.userRole);
			if (collections && collections.length) return collections;
			throw new Error('Collections not found');
		} catch (err) {
			throw err;
		}
	}

	async _collection(collectionId) {
		try {
			const collections = await this._collections();
			return collections.find(collection => collection.id === collectionId);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	get collections() {
		return this._collections();
	}

	getCollection(collectionId) {
		if (!mongoose.Types.ObjectId.isValid(collectionId)) throw new Error('Incorrect collectionId');
		return this._collection(collectionId);
	}

	async userRole() {
		if (!this._userId) return null;

		try {
			const project = await this._projectDoc();
			const projectUser = project.users.find(user => user.userId === this._userId);
			return projectUser.role;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	get id() {
		return this._projectId;
	}
}

export const getAllUserProjects = async (userId) => {
	if (!mongoose.Types.ObjectId.isValid(userId)) throw new Error('Incorrect userId');

	try {
		const foundProjects = await Project.find({ users: userId });
		return foundProjects.map(async project => new Project(project._id));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
