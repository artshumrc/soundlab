import mongoose from 'mongoose';
import check from 'check-types';


const _getLanguageVersion = (documents, language) => {
	return documents.find(element => element.language === language);
};


/**
 * This is a low level class for handling operations on the models by API classes.
 */
export default class MultilanguageModelClass {

	/**
	 * Sets class members.
	 * @param  {Object} Model               			Mongoose collection object.
	 * @param  {Array[String]}  multilanguageFields 	Array of field names which can have different language versions.
	 * @param  {Array[String]}  otherFields         	Array of field names which do NOT have different language versions.
	 */
	constructor(Model, parentFieldName, parentId, multilanguageFields = [], otherFields = []) {
		check.assert.object(Model);
		check.assert.string(parentFieldName);
		if (!mongoose.Types.ObjectId.isValid(parentId)) throw new Error('Incorrect parent id');
		check.assert.array(multilanguageFields);
		if (otherFields) check.assert.array(otherFields);

		/**
		 * Array of field names which can have different language versions.
		 * @type {Array[String]}
		 * @private
		 */
		this._multilanguageFields = multilanguageFields;

		/**
		 * Array of field names which do NOT have different language versions.
		 * @type {Array[String]}
		 * @private
		 */
		this._otherFields = otherFields;

		/**
		 * Mongoose collection object.
		 * @type {Object}
		 * @private
		 */
		this._Model = Model;

		/**
		 * Array of documents.
		 * @type {Array[Object]}
		 * @private
		 */
		this._documents = [];

		/**
		 * Name of the parent field.
		 * @type {String}
		 * @private
		 */
		this._parentFieldName = parentFieldName;

		/**
		 * Id of the parent
		 * @type {mongoose.Types.ObjectId}
		 */
		this._parentId = parentId;
	}

	get _parentQuery() {
		const query = {};
		query[this._parentFieldName] = this._parentId;
		return query;
	}

	_documents() {
		try {
			return this._Model.find(this._parentQuery);
		} catch (err) {
			throw err;
		}
	}

	get _allFields() {
		return this._multilanguageFields.concat(this._otherFields);
	}

	_checkIfMultilanguageField(field) {
		return this._multilanguageFields.indexOf(field) > -1;
	}

	_checkIfField(field) {
		return this._allFields.indexOf(field) > -1;
	}

	_checkCreateParams(params) {
		try {
			Object.keys(params).forEach((key) => {
				if (this._checkIfField(key)) return;
				throw new Error('');
			});
		} catch (err) {
			throw err;
		}
	}

	/**
	 * Get parentId
	 * @return {mongoose.Types.ObjectId} parentId
	 */
	get parentId() {
		return this._parentId;
	}

	_setMultilanguageFiled(documents, language, field, value) {
		const doc = _getLanguageVersion(documents, language);
		if (doc) {
			const setObj = {
				$set: {},
			};
			setObj.$set[field] = value;
			return this._Model.update({ _id: doc._id }, setObj);
		}
		throw new Error('Language version not found');
	}

	_setNonMultilanguageFiled(documents, field, value) {
		const setObj = {
			$set: {},
		};
		setObj.$set[field] = value;
		return this._Model.update(this._parentQuery, setObj);
	}

	/**
	 * Create a new document
	 * @param  {!Object} params   Object of params to be inserted into the model
	 * @param  {String} language Language shortcut.
	 * @return {[type]}          [description]
	 */
	async create(params, language = process.env.DEFAULT_LANGUAGE) {
		check.assert.object(params);
		this._checkCreateParams(params);
		check.assert.string(language);

		try {
			const documents = await this._documents();

			if (await _getLanguageVersion(documents, language)) throw new Error('Document of this language version already exists.');

			const modelParams = {
				language,
				...params,
			};
			modelParams[this._parentFieldName] = this._parentId;
			return this._Model.create(modelParams);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	removeAll() {
		try {
			return this._Model.remove(this._parentQuery);
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async removeLanguageVersion(language) {
		check.assert.string(language);

		try {
			const documents = await this._documents();
			const doc = _getLanguageVersion(documents, language);
			if (doc) {
				return this._Model.remove({ _id: doc._id });
			}
			throw new Error('Language version not found');
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async setValue(field, value, language = process.env.DEFAULT_LANGUAGE) {
		check.assert.string(field);
		check.assert.string(language);

		try {
			const documents = await this._documents();

			if (this._checkIfMultilanguageField(field)) {
				return this._setMultilanguageFiled(documents, language, field, value);
			}

			// if it is an other field (not multi language):
			if (this._checkIfField(field)) {
				return this._setNonMultilanguageFiled(documents, field, value);
			}
			throw new Error(`Field '${field}' is not allowed`);	

		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async getValue(field, language = process.env.DEFAULT_LANGUAGE) {
		check.assert.string(field);
		check.assert.string(language);

		if (this._checkIfField(field)) {
			const documents = await this._documents();

			const doc = _getLanguageVersion(documents, language);
			if (doc) return doc[field];
			return null;
		}
		throw new Error(`Field '${field}' is not allowed`);
	}
}
