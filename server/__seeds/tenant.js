import faker from 'faker';

// models
import Tenant from '../models/tenant';

// utils
import { canSeed, generateData, notEmptyError } from './utils';


const _insertOneItem = async (item) => {
	try {
		return await _registerUserPromiseWrapper(item);
	} catch (err) {
		throw err;
	}
};

const _insertData = async data => Promise.all(
	data.map(async (item) => {
		try {
			const newTenant = new Tenant(item);
			const tenant = await newTenant.save();
			return tenant._id;
		} catch (err) {
			throw err;
		}
	})
);

const generateTenants = async (count) => {
	if (await canSeed(Tenant)) {

		const data = await generateData(count, () => ({
			name: faker.internet.domainName(),
			url: faker.internet.url(),
		}));

		try {
			const tenantIds = await _insertData(data);
			return tenantIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Tenant');
};

export default generateTenants;
