import mongoose from 'mongoose';
import check from 'check-types';

/**
 * This is a low level class for handling operations on the models by API classes.
 */
export default class MultilanguageModelClass {

	/**
	 * Sets class members.
	 * @param  {Object} Model               			Mongoose collection object.
	 * @param  {Array[String]}  multilanguageFileds 	Array of filed names which can have different language versions.
	 * @param  {Array[String]}  otherFields         	Array of filed names which do NOT have different language versions.
	 */
	constructor(Model, multilanguageFileds = [], otherFields = []) {
		/**
		 * Array of filed names which can have different language versions.
		 * @type {Array[String]}
		 * @private
		 */
		this._multilanguageFileds = multilanguageFileds;

		/**
		 * Array of filed names which do NOT have different language versions.
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
		 * Name of the parent filed.
		 * @type {String}
		 * @private
		 */
		this._parentFiledName = null;

		/**
		 * Id of the parent
		 * @type {mongoose.Types.ObjectId}
		 */
		this._parentId = null;
	}

	get _allFields() {
		return this._multilanguageFileds.concat(this._otherFields);
	}

	_checkIfMultilanguageFiled(field) {
		return this._multilanguageFileds.indexOf(field) > -1;
	}

	_checkIfFiled(field) {
		return this._allFields.indexOf(field) > -1;
	}

	get _parentQuery() {
		const query = {};
		query[this._parentFiledName] = this._parentId;
		return query;
	}

	async _updateDocuments() {
		this._documents = await this._Model.find(this._parentQuery);
	}

	_checkCreateParams(params) {
		try {
			Object.keys(params).forEach((key) => {
				if (this._checkIfFiled(key)) return;
				throw new Error('');
			});
		} catch (err) {
			throw err;
		}
	}

	/**
	 * Initiate the class. Alway run after running the constructor.
	 * @param  {!String} parentFiledName 				Name of the filed in which the parent id is stored.
	 * @param  {!mongoose.Types.ObjectId} parentId       Id of the parent
	 * @return {this}                 					Return itself
	 */
	async init(parentFiledName, parentId) {
		// check if method can run
		if (!mongoose.Types.ObjectId.isValid(parentId)) throw new Error('Incorrect parent id');
		if (this.isSet) throw new Error('Model is already set');
		try {
			this._parentFiledName = parentFiledName;
			this._parentId = parentId;
			this._updateDocuments();
			return this;
		} catch (err) {
			throw err;
		}
	}

	/**
	 * Check if parent Id has been set (if init method has been run)
	 * @return {Boolean} True if init method has been run.
	 */
	get isSet() {
		if (this._parentId) return true;
		return false;
	}

	/**
	 * Check if object has documents set
	 * @return {Boolean} True if object has documents set
	 */
	get hasDocuments() {
		return this._documents.length > 0;
	}

	/**
	 * Get parentId
	 * @return {mongoose.Types.ObjectId} parentId
	 */
	get parentId() {
		if (this._parentId) return this._parentId;
		throw new Error('Not initiated');
	}

	/**
	 * Get a document with selected language version.
	 * @param  {!String} language Language shortcut
	 * @return {Object}          Matching document.
	 */
	getLanguageVersion(language) {
		return this._documents.find(element => element.language === language);
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
		if (this.getLanguageVersion(language)) throw new Error('Document of this language version already exists.');

		try {
			const modelParams = {
				language,
				...params,
			};
			modelParams[this._parentFiledName] = this._parentId;
			this._documents.push(await this._Model.create(modelParams));
			return this;
		} catch (err) {
			throw err;
		}
	}

	async remove() {
		if (!this.hasDocuments) throw new Error('Model is not set');
		try {
			await this._Model.remove(this._parentQuery);
			await this._updateDocuments();
			return this;
		} catch (err) {
			throw err;
		}
	}

	async removeLanguageVersion(language) {
		const model = this.getLanguageVersion(language);
		if (model) {
			await this._Model.remove({ _id: model._id });
			await this._updateDocuments();
			return this;
		}
		throw new Error('Language version not found');
	}

	async setValue(field, value, language = process.env.DEFAULT_LANGUAGE) {

		if (this._checkIfMultilanguageFiled(field)) {
			const model = this.getLanguageVersion(language);
			if (model) {
				const setObj = {
					$set: {},
				};
				setObj.$set[field] = value;
				await this._Model.update({ _id: model._id }, setObj);
				this._updateDocuments();
				return this;
			}
			throw new Error(`Model with language ${language} not set`);
		}
		// if it is an other field (not multi language):
		if (this._checkIfFiled(field)) {
			const setObj = {
				$set: {},
			};
			setObj.$set[field] = value;
			await this._Model.update(this._parentQuery, setObj);
			this._updateDocuments();
			return this;
		}
		throw new Error('incorrect field');		
	}

	getValue(field, language = process.env.DEFAULT_LANGUAGE) {
		if (this._checkIfFiled(field)) {
			const model = this.getLanguageVersion(language);
			if (model) return model[field];
			return null;
		}
		throw new Error(`Field '${field}' is not allowed`);
	}
}
