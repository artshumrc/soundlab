import mongoose from 'mongoose';
import check from 'check-types';

// models
import Tenant from '../models/tenant';

// api
import ProjectClass from './project';


export default class TenantClass {
	
	constructor(name, userRole) {
		check.assert.string(name);

		this._name = name;
		this._userRole = userRole;
	}

	async _tenantDoc() {
		try {
			const tenant = await Tenant.find({ name: this._name });
			if (tenant && tenant.length) return tenant;
			throw new Error('Tenant not found');
		} catch (err) {
			throw err;
		}
	}

	async _project() {
		try {
			const tenant = await this._tenantDoc();
			this._project = new ProjectClass(tenant.projectId);
		} catch (err) {
			throw err;
		}
	}

	get project() {
		return this._project();
	}
}

export const getAllProjectTenants = async (projectId, userRole) => {
	if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');

	try {
		const foundTenants = await Tenant.find({ projectId });
		return foundTenants.map(tenant => new Tenant(tenant.name, userRole));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
