import mongoose from 'mongoose';

// models
import Tenant from '../models/tenant';


export default class TenantClass {
	
	constructor(tenantId, projectId) {
		if (!mongoose.Types.ObjectId.isValid(tenantId)) throw new Error('Incorrect tenantId');
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');

		this._tenantId = tenantId;
		this._projectId = projectId;
	}

	async _tenant() {
		try {
			const tenant = await Tenant.findById({ _id: this._tenantId, projectId: this._projectId });
			if (tenant && tenant.length) return tenant;
			throw new Error('Tenant not found');
		} catch (err) {
			throw err;
		}
	}
}

export const getAllProjectTenants = async (projectId) => {
	if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');

	try {
		const foundTenants = await Tenant.find({ projectId });
		return foundTenants.map(tenant => new Tenant(tenant._id, projectId));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
