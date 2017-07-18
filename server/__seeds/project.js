import faker from 'faker';
import shortid from 'shortid';

// models
import Project from '../models/project';

// generators
import generateTenants from './tenant';

// utils
import { canSeed, generateData, insertData, notEmptyError, getRandom } from './utils';


const generateProjects = async (count, userIds) => {
	if (await canSeed(Project)) {

		const data = await generateData(count, async () => ({
			title: faker.commerce.productName(),
			userId: getRandom(userIds),
			tenantIds: await generateTenants(Math.floor((Math.random() * 3) + 1)) // generates between 1 - 3 tenants per project
		}));

		try {
			const projectIds = await insertData(data, Project, ['title']);
			return projectIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Project');
};

export default generateProjects;
