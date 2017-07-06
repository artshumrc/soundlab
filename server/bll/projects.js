// models
import Project from '../models/project';

// errors
import { AuthenticationError } from '../errors';

// bll
import { validateUser } from './authentication';


class ProjectsClass {

	constructor(ProjectModel) {
		this.ProjectModel = ProjectModel;
	}

	async create(username, project) {

		try {
			const user = await validateUser(username);

			const newProject = new this.ProjectModel(project);

			return await newProject.save();

		} catch (err) {
			throw err;
		}
	}

	findById(_id) {
		return this.ProjectModel.findById(_id);
	}

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

const Projects = new ProjectsClass(Project);

export default Projects;
