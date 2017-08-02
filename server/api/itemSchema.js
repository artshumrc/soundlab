import mongoose from 'mongoose';
import check from 'check-types';

// models
import ItemSchema from '../models/itemSchema';

// api
import { getAllItemSchemaFields } from './field';

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

const DEFAULT_MULTILANGUAGE_FIELDS = ['title'];


export default class ItemSchemaClass {
	
	constructor(itemSchemaId) {
		if (!mongoose.Types.ObjectId.isValid(itemSchemaId)) throw new Error('Incorrect item schema id');
		this._itemSchemaId = itemSchemaId;
	}

	async _itemSchema() {
		try {
			const itemSchame = await ItemSchema.findById(this._itemSchemaId);
			if (itemSchame && itemSchame.length) return itemSchame;
			throw new Error('ItemSchema not found');
		} catch (err) {
			throw err;
		}
	}

	async _fields() {
		try {
			const fields = await getAllItemSchemaFields(this._itemSchema);
			if (fields && fields.length) return fields;
			throw new Error('Fields not found');
		} catch (err) {
			throw err;
		}
	}

	async _generateMongooseItemSchemaFields() {
		try {
			const fields = await this._fields();
			const mongooseItemSchemaFields = {};
			await Promise.all(fields.map(async (Field) => {
				mongooseItemSchemaFields[Field.id] = await Field.getMongooseFields();
			}));
			return mongooseItemSchemaFields;
		} catch (err) {
			throw err;
		}
	}

	async getItemModel() {
		try {
			const mongooseItemSchemaFields = await this._generateMongooseItemSchemaFields();
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
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async getMultilanguageFields() {
		try {
			const fields = await this._fields();
			const multilanguageFields = [...DEFAULT_MULTILANGUAGE_FIELDS];
			await Promise.all(fields.map(async (Field) => {
				if (await Field.isMultilanguage()) {
					multilanguageFields.push(Field.id);
				}
			}));
			return multilanguageFields;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async getNonMultilanguageFields() {
		try {
			const fields = await this._fields();
			const nonMultilanguageFields = [...DEFAULT_MULTILANGUAGE_FIELDS];
			await Promise.all(fields.map(async (Field) => {
				const isMultilanguage = await Field.isMultilanguage();
				if (!isMultilanguage) {
					nonMultilanguageFields.push(Field.id);
				}
			}));
			return nonMultilanguageFields;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}
