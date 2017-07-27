import mongoose from 'mongoose';
import check from 'check-types';


export default class ModelAPIClass {
	constructor(Model, fileds = []) {
		this._editableFields = fileds;
		this._Model = Model;
		this._models = [];
	}

	async init(projectId) {
		// check if method can run
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect project id');
		if (this.isSet) throw new Error('Model is already set');
		try {
			this._models = await this._Model.find({ projectId });
			if (this._models.length) return this;
			throw new Error(`No documents found for project id: ${projectId}`);
		} catch (err) {
			throw err;
		}
	}

	get isSet() {
		if (this._models.length) return true;
		return false;
	}

	getLanguageVersion(language) {
		return this._models.find(element => element.language === language);
	}

	async create(projectId, params, language = process.env.DEFAULT_LANGUAGE) {
		// check if method can run
		mongoose.Types.ObjectId.isValid(projectId);
		check.assert.object(params);
		if (this.getLanguageVersion(language)) throw new Error('Models of this language version exists');

		try {
			const modelParams = {
				projectId,
				language,
				...params,
			};

			this._models.push(await this._Model.create(modelParams));
			return this;
		} catch (err) {
			throw err;
		}
	}

	async remove() {
		if (!this.isSet) throw new Error('Model is not set');
		try {
			await this._Model.remove({ projectId: this.projectId });
			this._models = this._Model.find({ projectId: this.projectId });
			return this;
		} catch (err) {
			throw err;
		}
	}

	async removeLanguageVersion(language) {
		const model = this.getLanguageVersion(language);
		if (model) {
			await this._Model.remove({ _id: model._id });
			this._models = await this._Model.find({ projectId: this.projectId });
			return this;
		}
		throw new Error('Language version not found');
	}

	async setValue(field, value, language = process.env.DEFAULT_LANGUAGE) {
		if (this._editableFields.indexOf(field) === -1) throw new Error(`Field '${field}' is not allowed`);

		if (this.getLanguageVersion(language)) {
			const setObj = {
				$set: {},
			};
			setObj.$set[field] = value;
			await this._Model.update({ projectId: this.projectId }, setObj);
			this._models = await this._Model.find({ projectId: this.projectId });
			return this;
		}
		throw new Error(`Model with language ${language} not set`);
	}

	getValue(field, language = process.env.DEFAULT_LANGUAGE) {
		if (this._editableFields.indexOf(field) === -1) throw new Error(`Field '${field}' is not allowed`);

		const model = this.getLanguageVersion(language);
		if (model) return model[field];
		return null;
	}

	get projectId() {
		if (this.isSet) return this._models[0].projectId;
		throw new Error('Model is not set');
	}
}
