import check from 'check-types';
import mongoose from 'mongoose';

// models
import Tenant from '../models/tenant';


const __tenantMember = Symbol('private tenant member');

export default class TenantClass {
	constructor(tenant) {
		if (tenant) {
			/**
			 * Tenant object from database
			 * @type {[type]}
		 	 * @private
			 */
			this[__tenantMember] = tenant;
		} else {
			this[__tenantMember] = null;
		}
	}

	async _createTenant(projectId, name) {
		try {
			const tenantParams = {
				name,
				projectId,
			};

			this[__tenantMember] = await Tenant.create(tenantParams);
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
			await Tenant.remove({ _id: this[__tenantMember]._id });
			this[__tenantMember] = null;
			return this;
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this[__tenantMember]) return true;
		return false;
	}

	get __tenant() {
		return this[__tenantMember];
	}

	async setName(name) {
		if (this.isSet) {
			const tenant = await Tenant.update({ _id: this[__tenantMember]._id }, { $set: { name } });
			this[__tenantMember] = tenant;
			return this;
		}
		throw new Error('Tenant not set');
	}

	get name() {
		if (this.isSet) return this[__tenantMember].name;
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
