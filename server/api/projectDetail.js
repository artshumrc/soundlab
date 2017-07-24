// models
import ProjectDetail from '../models/projectDetail';

export default class ProjectDetailClass {
	
	constructor(projectId, projectDetail) {
		if (projectDetail) this.projectDetail = projectDetail;
		this.projectId = projectId;
	}

	async _createProjectDetail(title, language) {

		try {
			const projectDetailParams = {
				title,
				projectId: this.projectId,
				language,
			};

			this.projectDetail = await new ProjectDetail({ ...projectDetailParams }).save();
			return true;

		} catch (err) {
			throw err;
		}
	}

	async create(title) {
		// check if method can run
		check.assert.string(title);
		if (this.projectDetail) throw new Error('Project detail already set');

		try {
			await this._createProjectDetail();
			return this;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async remove() {
		if (!this.projectDetail) throw new Error('Project detail is not set');
		try {
			await ProjectDetail.remove({ _id: this.projectDetail._id });
			this.projectDetail = null;
			return this;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async setDescription() { /* TODO */ }

	get projectDetail() {
		return this.projectDetail;
	}

}

export const getProjectDetails = async (projectId) => {
	try {
		const projectDetails = await ProjectDetail.find({ projectId: projectId });
		return projectDetails.map(projectDetail => new ProjectDetailClass(projectId, projectDetail));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
