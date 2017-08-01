import mongoose from 'mongoose';
import check from 'check-types';

// plug-ins
import timestamp from 'mongoose-timestamp';

const Schema = mongoose.Schema;

/**
 * Filed base schema
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
		// 'Array' type has ref filed set to 'Filed' collection, pointing to another field type
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
});


// add timestamps (createdAt, updatedAt)
FieldSchema.plugin(timestamp);

// Custom validation rules
FieldSchema.pre('validate', (next) => {
	switch(this.type) {
	case 'String': {
		if (!check.string(this.default)) next(Error(`filed 'default' is type of ${typeof this.default}. Must be a string`));
		if (this.ref) next(Error(`filed 'ref' can not be set with type = string`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.string(enumValue)) {
					next(Error(`filed 'enum' is type of ${typeof enumValue}. Must be a string`));
				}
			});
		}
		if (this.min) next(Error(`filed 'min' can not be set with type = string`));
		if (this.max) next(Error(`filed 'max' can not be set with type = string`));
		break;
	}
	case 'Number': {
		if (!check.number(this.default)) next(Error(`filed 'default' is type of ${typeof this.default}. Must be a number`));
		if (this.ref) next(Error(`filed 'ref' can not be set with type = number`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.number(enumValue)) {
					next(Error(`filed 'enum' is type of ${typeof enumValue}. Must be a number`));
				}
			});
		}
		if (!check.number(this.min)) next(Error(`filed 'min' is type of ${typeof this.default}. Must be a number`));
		if (!check.number(this.max)) next(Error(`filed 'max' is type of ${typeof this.default}. Must be a number`));
		break;
	}
	case 'Date': {
		if (!check.date(this.default)) next(Error(`filed 'default' is type of ${typeof this.default}. Must be a date`));
		if (this.ref) next(Error(`filed 'ref' can not be set with type = date`));
		if (this.enum instanceof Array) {
			this.enum.forEach((enumValue) => {
				if (!check.date(enumValue)) {
					next(Error(`filed 'enum' is type of ${typeof enumValue}. Must be a date`));
				}
			});
		}
		if (!check.date(this.min)) next(Error(`filed 'min' is type of ${typeof this.default}. Must be a date`));
		if (!check.date(this.max)) next(Error(`filed 'max' is type of ${typeof this.default}. Must be a date`));
		break;
	}
	case 'Boolean': {
		if (!check.boolean(this.default)) next(Error(`filed 'default' is type of ${typeof this.default}. Must be a boolean`));
		if (this.ref) next(Error(`filed 'ref' can not be set with type = boolean`));
		if (this.enum) next(Error(`filed 'enum' can not be set with type = boolean`));
		if (this.min) next(Error(`filed 'min' can not be set with type = boolean`));
		if (this.max) next(Error(`filed 'max' can not be set with type = boolean`));
		break;
	}
	case 'ObjectId': {
		if (this.default instanceof Schema.Types.ObjectId) next(Error(`filed 'default' is not instance of ObjectId`));
		if (this.enum) next(Error(`filed 'enum' can not be set with type = ObjectId`));
		if (this.min) next(Error(`filed 'min' can not be set with type = ObjectId`));
		if (this.max) next(Error(`filed 'max' can not be set with type = ObjectId`));
		break;
	}
	case 'Array': {
		if (this.default instanceof Schema.Types.ObjectId) next(Error(`filed 'default' is not instance of ObjectId`));
		this.ref = 'Filed';
		if (this.enum) next(Error(`filed 'enum' can not be set with type = ObjectId`));
		if (this.min) next(Error(`filed 'min' can not be set with type = ObjectId`));
		if (this.max) next(Error(`filed 'max' can not be set with type = ObjectId`));
		break;
	}
	}
});

/**
 * Filed mongoose model
 * @type {Object}
 */
const Filed = mongoose.model('Filed', FieldSchema);

export default Filed;
export { FieldSchema };

