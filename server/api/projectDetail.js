import check from 'check-types';
import mongoose from 'mongoose';

// models
import ProjectDetail from '../models/projectDetail';


const __projectDetailMember = Symbol('private project detail member');


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
			this[__projectDetailMember] = projectDetail;
		} else {
			this[__projectDetailMember] = null;
		}
	}

	async _createProjectDetail(projectId, title, language) {

		try {
			const projectDetailParams = {
				title,
				projectId,
				language,
			};

			this[__projectDetailMember] = await ProjectDetail.create(projectDetailParams);
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
			await ProjectDetail.remove({ _id: this[__projectDetailMember]._id });
			this[__projectDetailMember] = null;
			return this;
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this[__projectDetailMember]) return true;
		return false;
	}

	get __projectDetail() {
		return this[__projectDetailMember];
	}

	async setTitle(title) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetailMember]._id }, { $set: { title } });
			this[__projectDetailMember] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get title() {
		if (this.isSet) return this[__projectDetailMember].title;
		return null;
	}

	async setDescription(description) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetailMember]._id }, { $set: { description } });
			this[__projectDetailMember] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get description() {
		if (this.isSet) return this[__projectDetailMember].description;
		return null;
	}

	async setLanguage(language) {
		if (this.isSet) {
			const projectDetail = await ProjectDetail.update({ _id: this[__projectDetailMember]._id }, { $set: { language } });
			this[__projectDetailMember] = projectDetail;
			return this;
		}
		throw new Error('Project Detail not set');
	}

	get language() {
		if (this.isSet) return this[__projectDetailMember].language;
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
