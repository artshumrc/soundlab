import check from 'check-type';

// models
import Collection from '../models/collection';

// api
import Projects from './projects';



/**
 * Collections Business logic layer
 * @type {Object}
 * @property {function} create Create a new collection
 */
const Collections = {

	async create(username, title, language, projectId) {

		try {
			await Projects.verifyOwner(username, projectId);

			return new Collection({ title, language, projectId }).save();

		} catch (err) {
			throw err;
		}
	},

};

export default Collections;
