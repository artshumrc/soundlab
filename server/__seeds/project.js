import faker from 'faker';

// models
import Project from '../models/project';

// generators
import generateTenants from './tenant';

// utils
import { canSeed, generateData, notEmptyError, getRandom } from './utils';


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
			const newProject = new Project(item);
			const project = await newProject.save();
			return project._id;
		} catch (err) {
			throw err;
		}
	})
);

const generateProjects = async (count, userIds) => {
	if (await canSeed(Project)) {

		const data = await generateData(count, async () => ({
			title: faker.commerce.productName(),
			userId: getRandom(userIds),
			tenantIds: await generateTenants(Math.floor((Math.random() * 3) + 1)) // generates between 1 - 3 tenants per project
		}));

		try {
			const projectIds = await _insertData(data);
			return projectIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Project');
};

export default generateProjects;
