import check from 'check-types';
import mongoose from 'mongoose';

// models
import ProjectDetail from '../models/projectDetail';


const __projectDetail = Symbol('private project detail member');


/**
 * 
 */
export default class ProjectDetailClass {
	
	/**
	 * ProjectDetailClass constructor: initiates the projectDetail member.
	 * @param  {Object} projectDetail 	 mongodb raw document of the project detail
	 */
	constructor(projectDetail) {
		if (projectDetail) {
			/**
			 * Project detail object from database
			 * @type {[type]}
		 	 * @private
			 */
			this[__projectDetail] = projectDetail;
		} else {
			this[__projectDetail] = null;
		}
	}

	async _createProjectDetail(projectId, title, language) {

		try {
			const projectDetailParams = {
				title,
				projectId,
				language,
			};

			this[__projectDetail] = await ProjectDetail.create(projectDetailParams);
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
			await ProjectDetail.remove({ _id: this[__projectDetail]._id });
			this[__projectDetail] = null;
			return this;
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this[__projectDetail]) return true;
		return false;
	}

	get __projectDetail() {
		return this[__projectDetail];
	}

	async setTitle(title) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetail]._id }, { $set: { title } });
			this[__projectDetail] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get title() {
		if (this.isSet) return this[__projectDetail].title;
		return null;
	}

	async setDescription(description) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetail]._id }, { $set: { description } });
			this[__projectDetail] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get description() {
		if (this.isSet) return this[__projectDetail].description;
		return null;
	}

	async setLanguage(language) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetail]._id }, { $set: { language } });
			this[__projectDetail] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get language() {
		if (this.isSet) return this[__projectDetail].language;
		return null;
	}

}

export const getProjectDetails = async (projectId) => {
	try {
		if (projectId) {
			const projectDetails = await ProjectDetail.find({ projectId: projectId });
			return projectDetails.map(projectDetail => new ProjectDetailClass(projectDetail));
		}
		throw new Error('no projectId provided');
	} catch (err) {
		throw err;
	}
};
