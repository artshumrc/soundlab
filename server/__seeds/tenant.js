import faker from 'faker';

// models
import Tenant from '../models/tenant';

// utils
import { canSeed, generateData, insertData, notEmptyError } from './utils';


const generateTenants = async (count) => {
	if (await canSeed(Tenant)) {

		const data = await generateData(count, () => ({
			name: faker.internet.domainName(),
			url: faker.internet.url(),
		}));

		try {
			const tenantIds = await insertData(data, Tenant, ['name', 'url']);
			return tenantIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Tenant');
};

export default generateTenants;
