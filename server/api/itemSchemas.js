import check from 'check-type';

// models
import ItemSchema from '../models/itemSchema';

// api
import Users from './users';
import Projects from './projects';


const _validateFileds = () => {
	// TODO
	return true;
};


/**
 * ItemSchemas Business logic layer
 * @type {Object}
 * @property {function} create Create a new itemSchema
 */
const ItemSchemas = {

	async create(username, name, fileds, language, isPrivate) {

		try {
			const user = await Users.validateUser(username);

			_validateFileds(fileds);

			return new ItemSchema({ name, fileds, language, private: isPrivate }).save();

		} catch (err) {
			throw err;
		}
	},

};

export default ItemSchemas;
