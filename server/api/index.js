import check from 'check-types';

// api
import UserClass from './user';
import TenantClass from './tenant';

export default class Orpheus {

	constructor(tenantName, username) {
		check.assert.string(tenantName);
		check.string(username);

		this._tenantName = tenantName;
		this._username = username;

		this._tenant = new TenantClass(tenantName);
		this._user = new UserClass(username);
	}

	get tenant() {
		return this._tenant;
	}

	get user() {
		return this._user;
	}
}

// const user = new Orpheus('myTenant', 'myusername').user;
// const project = await user.getProject('projectId');
// const tenant = await project.getTenant('tenantId');
// tenant.setSomething('some value');
