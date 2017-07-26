import check from 'check-types';
import mongoose from 'mongoose';

// models
import Tenant from '../models/tenant';


const __tenant = Symbol('private tenant member');

export default class TenantClass {
	constructor(tenant) {
		if (tenant) {
			this[__tenant] = tenant;
		} else {
			this[__tenant] = null;
		}
	}

	async _createTenant(projectId, name) {
		try {
			const tenantParams = {
				name,
				projectId,
			};

			this[__tenant] = await Tenant.create(tenantParams);
			return true;

		} catch (err) {
			throw err;
		}
	}

	async create(projectId, name) {
		// check if method can run
		mongoose.Types.ObjectId.isValid(projectId);
		check.assert.string(name);

		if (this.isSet) throw new Error('Tenant already set');

		try {
			await this._createTenant(projectId, name);
			return this;
		} catch (err) {
			throw err;
		}
	}

	async remove() {
		if (!this.isSet) throw new Error('Tenant is not set');
		try {
			await Tenant.remove({ _id: this[__tenant]._id });
			this[__tenant] = null;
			return this;
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this[__tenant]) return true;
		return false;
	}

	get __tenant() {
		return this[__tenant];
	}

	async setName(name) {
		if (this.isSet) {
			const tenant = await Tenant.update({ _id: this[__tenant]._id }, { $set: { name } });
			this[__tenant] = tenant;
			return this;
		}
		throw new Error('Tenant not set');
	}

	get name() {
		if (this.isSet) return this[__tenant].name;
		return null;
	}
}

export const getTenantsForProject = async (projectId) => {
	try {
		if (projectId) {
			const tenants = await Tenant.find({ projectId: projectId });
			return tenants.map(tenant => new TenantClass(tenant));
		}
		throw new Error('no projectId provided');
	} catch (err) {
		throw err;
	}
};
