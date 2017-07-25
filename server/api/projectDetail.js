import check from 'check-types';
import mongoose from 'mongoose';

// models
import ProjectDetail from '../models/projectDetail';

/**
 * 
 */
export default class ProjectDetailClass {
	
	/**
	 * ProjectDetailClass constructor: initiates the projectId and initiate projectDetail members.
	 * If projectDetail not provided, use create method to create new projectDetail. 
	 * @param  {Object} projectDetail 	 mongodb raw document of the project detail
	 */
	constructor(projectDetail) {
		if (projectDetail) {
			/**
			 * Project detail obejct from database
			 * @type {[type]}
		 	 * @private
			 */
			this.projectDetail = projectDetail;
		} else {
			this.projectDetail = null;
		}
	}

	async _createProjectDetail(projectId, title, language) {

		try {
			const projectDetailParams = {
				title,
				projectId,
				language,
			};

			this.projectDetail = await ProjectDetail.create(projectDetailParams);
			return true;

		} catch (err) {
			throw err;
		}
	}

	/**
	 * Create new project detail
	 * @param  {!String} projectId 		Id of the project owning the description
	 * @param  {!String} title     		Title of the project
	 * @return {ProjectDetailClass}     Instance of the project detail class (this)
	 */
	async create(projectId, title) {
		// check if method can run
		mongoose.Types.ObjectId.isValid(projectId);
		check.assert.string(title);
		if (this.isSet) throw new Error('Project detail already set');

		try {
			await this._createProjectDetail(projectId, title);
			return this;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	/**
	 * Remove the projectDetail
	 * @return {ProjectDetailClass}     Instance of the project detail class (this)
	 */
	async remove() {
		if (!this.isSet) throw new Error('Project detail is not set');
		try {
			await ProjectDetail.remove({ _id: this.projectDetail._id });
			this.projectDetail = null;
			return this;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	get isSet() {
		if (this.projectDetail) return true;
		return false;
	}

	get __projectDetail() {
		return this.projectDetail;
	}

	async setTitle(title) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this.projectDetail._id }, { $set: { title } });
			this.projectDetail = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get title() {
		if (this.isSet) return this.projectDetail.title;
		throw new Error('Project Detail not set');
	}

	async setDescription(description) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this.projectDetail._id }, { $set: { description } });
			this.projectDetail = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get description() {
		if (this.isSet) return this.projectDetail.description;
		throw new Error('Project Detail not set');
	}

	async setLanguage(language) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this.projectDetail._id }, { $set: { language } });
			this.projectDetail = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get language() {
		if (this.isSet) return this.projectDetail.language;
		throw new Error('Project Detail not set');
	}

}

export const getProjectDetails = async (projectId) => {
	try {
		const projectDetails = await ProjectDetail.find({ projectId: projectId });
		return projectDetails.map(projectDetail => new ProjectDetailClass(projectDetail));
	} catch (err) {
		console.error(err);
		throw err;
	}
};
