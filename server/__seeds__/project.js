import faker from 'faker';
import shortid from 'shortid';

// models
import Project from '../models/project';

// utils
import { canSeed, generateData, insertData, notEmptyError, getRandom } from './utils';


const generateProjects = async (count, userIds) => {
	if (await canSeed(Project)) {

		const data = await generateData(count, async () => ({
			userId: getRandom(userIds),
			languages: ['en']
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
