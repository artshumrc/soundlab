import check from 'check-types';

import Project from '../models/project';

class ProjectsClass {

	constructor(ProjectModel) {
		this.ProjectModel = ProjectModel;
	}

	create(user, project) {
		if (!user) throw new Error('not authorized');
		// TODO find user
		if (!check.object(project)) throw new Error('Provided project is not an object.');

		const newProject = new this.ProjectModel(project);
		return newProject.save();
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

	addTenant(user, tenatnId) {
		// TODO
	}

	removeTenant(user, project) {
		// TODO
	}

	removeProject(user, _id) {
		// TODO
	}

}

const Projects = new ProjectsClass(Project);

export default Projects;
