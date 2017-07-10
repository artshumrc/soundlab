// models
import Project from '../models/project';

// errors
import { AuthenticationError } from '../errors';

// bll
import { validateUser } from './authentication';

class ProjectsClass {

	/**
	 * Set's the ProjectModel to the mongoose model instance
	 * @param  {Object} ProjectModel Project mongoose model instance
	 */
	constructor(ProjectModel) {
		/**
		 * roject mongoose model instance
		 * @type {mongoose.model}
		 */
		this.ProjectModel = ProjectModel;
	}

	/**
	 * Create new project
	 * @param  {string} username The username of the user calling the function
	 * @param  {Object} project  The project to be created
	 * @return {Promise}         Project save promise
	 */
	async create(username, project) {

		try {
			const user = await validateUser(username);

			const newProject = new this.ProjectModel(project);

			return newProject.save();

		} catch (err) {
			throw err;
		}
	}

	// test:
	findOne() {
		return this.ProjectModel.findOne();
	}

	// test:
	async findOneSecret(username) {
		try {
			const user = await validateUser(username);
			const test = await this.ProjectModel.findOne();
			return test;

		} catch (err) {
			throw err;
		}
	}

	/**
	 * Find project by _id
	 * @param  {String} _id Id of the searched project
	 * @return {Promise}    Found project promise
	 */
	findById(_id) {
		return this.ProjectModel.findById(_id);
	}

	/**
	 * Find project by slug
	 * @param  {String} slug Slug of the searched project
	 * @return {Promise}     Found project promise
	 */
	findBySlug(slug) {
		if (slug) {
			return this.ProjectModel.findOne({ slug });
		}
		return new Promise((resolve, reject) => reject('slug not specified'));
	}

	addTenant(username, tenatnId) {
		// TODO
	}

	removeTenant(username, project) {
		// TODO
	}

	removeProject(username, _id) {
		// TODO
	}

}

/**
 * Object to be used to performe operations on all Projects
 * @type {ProjectsClass}
 */
const Projects = new ProjectsClass(Project);

export default Projects;
