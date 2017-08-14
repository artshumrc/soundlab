import mongoose from 'mongoose';
import check from 'check-types';

// plug-ins
import timestamp from 'mongoose-timestamp';

const Schema = mongoose.Schema;

/**
 * Field base schema
 * @type {Schema}
 */
const FieldSchema = new Schema({
	itemSchemaId: {
		type: Schema.Types.ObjectId,
		ref: 'ItemSchema',
		required: true,
		index: true
	},
	type: {
		type: Object,
		required: true,
		enum: ['String', 'Number', 'Date', 'Boolean', 'ObjectId', 'Array'],
	},
	arrayFieldId: {
		type: String,
	},
	required: {
		type: Boolean,
		default: false,
	},
	default: {
		type: Schema.Types.Mixed,
	},
	ref: {
		type: String,
	},
	enum: {
		type: Array,
	},
	min: {
		type: Number,
	},
	max: {
		type: Number,
	},
	multilanguage: { // only type String can be multilanguage
		type: Boolean,
		defaut: false,
	}
});


// add timestamps (createdAt, updatedAt)
FieldSchema.plugin(timestamp);

// Custom validation rules
FieldSchema.pre('validate', (next) => {
	switch(this.type) {
	case 'String': {
		if (!check.string(this.default)) next(Error(`field 'default' is type of ${typeof this.default}. Must be a string`));
		if (this.arrayFieldId) next(Error(`field 'arrayFieldId' can not be set with type = string`));
		if (this.ref) next(Error(`field 'ref' can not be set with type = string`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.string(enumValue)) {
					next(Error(`field 'enum' is type of ${typeof enumValue}. Must be a string`));
				}
			});
		}
		if (this.min) next(Error(`field 'min' can not be set with type = string`));
		if (this.max) next(Error(`field 'max' can not be set with type = string`));
		break;
	}
	case 'Number': {
		if (!check.number(this.default)) next(Error(`field 'default' is type of ${typeof this.default}. Must be a number`));
		if (this.arrayFieldId) next(Error(`field 'arrayFieldId' can not be set with type = number`));
		if (this.ref) next(Error(`field 'ref' can not be set with type = number`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.number(enumValue)) {
					next(Error(`field 'enum' is type of ${typeof enumValue}. Must be a number`));
				}
			});
		}
		if (!check.number(this.min)) next(Error(`field 'min' is type of ${typeof this.default}. Must be a number`));
		if (!check.number(this.max)) next(Error(`field 'max' is type of ${typeof this.default}. Must be a number`));
		this.multilanguage = false;
		break;
	}
	case 'Date': {
		if (!check.date(this.default)) next(Error(`field 'default' is type of ${typeof this.default}. Must be a date`));
		if (this.arrayFieldId) next(Error(`field 'arrayFieldId' can not be set with type = date`));
		if (this.ref) next(Error(`field 'ref' can not be set with type = date`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.date(enumValue)) {
					next(Error(`field 'enum' is type of ${typeof enumValue}. Must be a date`));
				}
			});
		}
		if (!check.date(this.min)) next(Error(`field 'min' is type of ${typeof this.default}. Must be a date`));
		if (!check.date(this.max)) next(Error(`field 'max' is type of ${typeof this.default}. Must be a date`));
		this.multilanguage = false;
		break;
	}
	case 'Boolean': {
		if (!check.boolean(this.default)) next(Error(`field 'default' is type of ${typeof this.default}. Must be a boolean`));
		if (this.arrayFieldId) next(Error(`field 'arrayFieldId' can not be set with type = boolean`));
		if (this.ref) next(Error(`field 'ref' can not be set with type = boolean`));
		if (this.enum) next(Error(`field 'enum' can not be set with type = boolean`));
		if (this.min) next(Error(`field 'min' can not be set with type = boolean`));
		if (this.max) next(Error(`field 'max' can not be set with type = boolean`));
		this.multilanguage = false;
		break;
	}
	case 'ObjectId': {
		if (this.default instanceof Schema.Types.ObjectId) next(Error(`field 'default' is not instance of ObjectId`));
		if (!this.arrayFieldId) next(Error(`field 'arrayFieldId' must be set with type = ObjectId`));
		if (this.enum) next(Error(`field 'enum' can not be set with type = ObjectId`));
		if (this.min) next(Error(`field 'min' can not be set with type = ObjectId`));
		if (this.max) next(Error(`field 'max' can not be set with type = ObjectId`));
		this.multilanguage = false;
		break;
	}
	case 'Array': {
		if (this.default instanceof Array) next(Error(`field 'default' is not instance of Array`));
		if (this.ref) next(Error(`field 'ref' can not be set with type = Array`));
		if (this.enum) next(Error(`field 'enum' can not be set with type = Array`));
		if (this.min) next(Error(`field 'min' can not be set with type = Array`));
		if (this.max) next(Error(`field 'max' can not be set with type = Array`));
		this.multilanguage = false;
		break;
	}
	}
});

// Statics
FieldSchema.statics.findByItemSchemaId = function findByItemSchemaId(itemSchemaId, cb) {
	return this.find({ itemSchemaId }, cb);
};

/**
 * Field mongoose model
 * @type {Object}
 */
const Field = mongoose.model('Field', FieldSchema);

export default Field;
export { FieldSchema };

