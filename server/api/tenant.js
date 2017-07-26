import check from 'check-types';
import mongoose from 'mongoose';

// models
import Tenant from '../models/tenant';

// api
import ModelAPIClass from './modelAPI';
import { checkLanguage } from './languages';


export default class TenantClass extends ModelAPIClass {
	constructor() {
		super(Tenant, ['name']);
	}

	async create(projectId, name, language = process.env.DEFAULT_LANGUAGE) {
		// check if method can run
		check.assert.string(name);
		try {
			await super.create(projectId, { name }, language);
			return this;
		} catch (err) {
			throw err;
		}
	}
}
