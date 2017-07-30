// models
import Tenant from '../models/tenant';

// api
import MultilanguageModelClass from './multilanguageModel';


export default class TenantClass extends MultilanguageModelClass {
	constructor() {
		const multilanguageFileds = ['name'];
		const otherFields = [];
		super(Tenant, multilanguageFileds, otherFields);

		this._parentFiledName = 'projectId';
	}

	async init(parentId) {
		this._parentId = parentId;
		return super.init(this._parentFiledName, this._parentId);
	}
}
