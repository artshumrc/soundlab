import mongoose from 'mongoose';
import check from 'check-types';

// models
import ItemSchema from '../models/itemSchema';

// api
import { getAllItemSchemaFields } from './filed';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const DEFAULT_ITEM_SCHEMA_FIELDS = {
	title: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	collectionId: {
		type: Schema.Types.ObjectId,
		ref: 'Collection',
		index: true,
		required: true,
	}
};

export default class ItemSchemaClass {
	
	constructor() {
		this._itemSchema = null;
		this._fileds = [];
	}

	async init(itemSchemaId) {
		check.asser.string(itemSchemaId);
		try {
			const itemSchema = await ItemSchema.findById(itemSchemaId);
			if (itemSchema) {
				this._itemSchema = itemSchema;
				this._fileds = await getAllItemSchemaFields(this._itemSchema);
				return this;
			}
			throw new Error(`Item Schame with itemSchemaId: ${itemSchemaId} is not available`);
		} catch (err) {
			throw err;
		}
	}

	_generateMongooseItemSchemaFields() {
		if (this._itemSchema) {
			const mongooseItemSchemaFields = {};
			this._fileds.forEach((Filed) => {
				mongooseItemSchemaFields[filed._id] = Field.mongooseFields;
			});
			return mongooseItemSchemaFields;
		}
		throw new Error('Run init method');
	}

	get ItemModel() {
		const mongooseItemSchemaFields = this._generateMongooseItemSchemaFields();
		const itemSchemaFields = {
			...mongooseItemSchemaFields,
			...DEFAULT_ITEM_SCHEMA_FIELDS,
		};
		const Schema = mongoose.Schema;
		const GeneratedItemSchema = new Schema(itemSchemaFields);

		// add timestamps (createdAt, updatedAt)
		GeneratedItemSchema.plugin(timestamp);

		// add slug (slug)
		GeneratedItemSchema.plugin(URLSlugs('title'));

		// add language (language)
		GeneratedItemSchema.plugin(language);

		const ItemModel = mongoose.model('Item', GeneratedItemSchema);

		return ItemModel;
	}

	get multilanguageFields() {
		const multilanguageFields = ['title'];
		this._fileds.forEach((filed) => {
			if (filed.isMultilanguage) {
				multilanguageFields.push(filed._id);
			}
		});
		return multilanguageFields;
	}

	get nonMultilanguageFields() {
		const nonMultilanguageFields = [];
		this._fileds.forEach((filed) => {
			if (!filed.isMultilanguage) {
				nonMultilanguageFields.push(filed._id);
			}
		});
		return nonMultilanguageFields;
	}

	get isSet() {
		if (this._itemSchema) return true;
		throw new Error('Run init method');
	}

	get name() {
		if (this.isSet) return this._itemSchema.name;
	}

	get languages() {
		if (this.isSet) return this._itemSchema.languages;
	}

	get private() {
		if (this.isSet) return this._itemSchema.private;
	}
}
