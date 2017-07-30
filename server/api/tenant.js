import check from 'check-types';
import mongoose from 'mongoose';

// models
import Tenant from '../models/tenant';

// api
import ModelAPIClass from './modelAPI';
import { checkLanguage } from './languages';


export default class TenantClass extends ModelAPIClass {
	constructor() {
		const multilanguageFileds = ['name'];
		const otherFields = [];
		super(Tenant, multilanguageFileds, otherFields);

		this._parentFiledName = 'projectId';
		this._parentId = parentId;
	}

	async init() {
		return super.init(this._parentFiledName, this._parentId);
	}
}
