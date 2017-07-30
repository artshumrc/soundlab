import mongoose from 'mongoose';
import check from 'check-types';


export default class ModelAPIClass {
	constructor(Model, multilanguageFileds = [], otherFields = []) {
		this._multilanguageFileds = multilanguageFileds;
		this._otherFields = otherFields;
		this._Model = Model;
		this._models = [];
		this._parentFiledName = null;
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

	async _updateModels() {
		this._models = await this._Model.find(this._parentQuery);
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

	async init(parentFiledName, parentId) {
		// check if method can run
		if (!mongoose.Types.ObjectId.isValid(parentId)) throw new Error('Incorrect parent id');
		if (this.isSet) throw new Error('Model is already set');
		try {
			this._parentFiledName = parentFiledName;
			this._parentId = parentId;
			this._updateModels();
			return this;
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this._parentId) return true;
		return false;
	}

	get hasModels() {
		return this._models.length > 0;
	}

	getLanguageVersion(language) {
		return this._models.find(element => element.language === language);
	}

	async create(params, language = process.env.DEFAULT_LANGUAGE) {
		// check if method can run
		check.assert.object(params);
		this._checkCreateParams(params);
		if (this.getLanguageVersion(language)) throw new Error('Models of this language version exists');

		try {
			const modelParams = {
				language,
				...params,
			};
			modelParams[this._parentFiledName] = this._parentId;
			this._models.push(await this._Model.create(modelParams));
			return this;
		} catch (err) {
			throw err;
		}
	}

	async remove() {
		if (!this.hasModels) throw new Error('Model is not set');
		try {
			await this._Model.remove(this._parentQuery);
			await this._updateModels();
			return this;
		} catch (err) {
			throw err;
		}
	}

	async removeLanguageVersion(language) {
		const model = this.getLanguageVersion(language);
		if (model) {
			await this._Model.remove({ _id: model._id });
			await this._updateModels();
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
				this._updateModels();
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
			this._updateModels();
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

	get parentId() {
		if (this._parentId) return this._parentId;
		throw new Error('Not initiated');
	}
}
