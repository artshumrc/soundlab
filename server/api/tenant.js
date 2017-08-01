// import check from 'check-types';

// models
import Tenant from '../models/tenant';


export default class TenantClass {
	
	constructor() {
		this._tenant = null;
	}

	async init(tenantId, projectId) {
		try {
			const tenant = await Tenant.findById({ _id: tenantId, projectId });
			if (tenant) {
				this._tenant = tenant;
				return this;
			}
			throw new Error(`Tenant with id: ${tenantId} and projectId: ${projectId} is not available`);
		} catch (err) {
			throw err;
		}
	}
}

export const getAllProjectTenants = async (projectId) => {
	try {
		const foundTenants = await Tenant.find({ projectId });
		return Promise.all(foundTenants.map(async tenant => new Tenant().init(tenant._id, projectId)));
	} catch (err) {
		throw err;
	}
};
