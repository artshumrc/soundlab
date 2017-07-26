import check from 'check-types';
import mongoose from 'mongoose';

// models
import ProjectDetail from '../models/projectDetail';

// api
import ModelAPIClass from './modelAPI';
import { checkLanguage } from './languages';


/**
 * 
 */
export default class ProjectDetailClass extends ModelAPIClass {
	
	/**
	 * ProjectDetailClass constructor: initiates  members.
	 */
	constructor() {
		super(ProjectDetail, ['title', 'description']);
	}

	async create(projectId, title, language = process.env.DEFAULT_LANGUAGE) {
		// check if method can run
		check.assert.string(title);
		try {
			await super.create(projectId, { title }, language);
			return this;
		} catch (err) {
			throw err;
		}
	}
}
