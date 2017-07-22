// models
import Project from '../models/project';

// api
import Users from './users';
import { checkLanguages } from './languages';


const _creatNewProjectObject = (user, languages) => {
	const project = {};
	project.userId = user._id;

	if (checkLanguages(languages)) {
		project.languages = languages;
	} else {
		throw new Error('Incorrect language');
	}
	return project;
};

const _verifyUser = async (username, projectId, role) => {
	const user = await Users.validateUser(username);

	const project = await Project.findById(projectId);

	if (!project) throw new Error(`Project with id ${projectId} not found`);

	const projectUser = project.users.find(projUser => projUser.userId === user._id);

	if (projectUser) {
		return projectUser.role === role;
	}
	throw new Error(`User ${username} is not allowed access to project ${projectId}`);
};

/**
 * Projects Business logic layer
 * @type {Object}
 * @property {function} create 		Create a new project
 * @property {function} verify 		Verify if user is an owner of the project
 */
const Projects = {

	async create(username, languages) {

		try {
			const user = await Users.validateUser(username);

			const projectObj = _creatNewProjectObject(user, languages);

			return await Project(projectObj).save();

		} catch (err) {
			throw err;
		}
	},
	async verifyOwner(username, projectId) {
		try {
			return await _verifyUser(username, projectId, 'Owner');
		} catch (err) {
			throw err;
		}
	},
	// findById(_id) {
	// 	if (_id) {
	// 		return Project.findById(_id).populate('userId tenantIds');
	// 	}
	// 	throw new Error('_id not specified');
	// },
	// findBySlug(slug) {
	// 	if (slug) {
	// 		return Project.findOne({ slug });
	// 	}
	// 	throw new Error('slug not specified');
	// }
};

export default Projects;
