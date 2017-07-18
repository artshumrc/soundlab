// models
import Project from '../models/project';

// errors
import { AuthenticationError } from '../errors';

// bll
import Users from './users';

/**
 * Projects Buisness logic layer
 * @type {Object}
 * @property {function} create Create a new project
 * @property {function} findById Find project by _id
 * @property {function} findBySlug Find project by slug
 */
const Projects = {

	async create(username, project) {

		try {
			const user = await Users.validateUser(username);

			if (user) return new Project(project).save();

		} catch (err) {
			throw err;
		}
	},
	findById(_id) {
		if (_id) {
			return Project.findById(_id).populate('userId tenantIds');
		}
		throw new Error('_id not specified');
	},
	findBySlug(slug) {
		if (slug) {
			return Project.findOne({ slug });
		}
		throw new Error('slug not specified');
	}

	// addTenant(username, tenatnId) {
	// 	// TODO
	// },

	// removeTenant(username, project) {
	// 	// TODO
	// },

	// removeProject(username, _id) {
	// 	// TODO
	// },

};

export default Projects;
