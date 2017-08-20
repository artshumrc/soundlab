import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import languageplugin from './plugins/language';

const Schema = mongoose.Schema;

/**
 * FieldDetail base schema
 * @type {Schema}
 */
const FieldDetailSchema = new Schema({
	fieldId: {
		type: Schema.Types.ObjectId,
		ref: 'Field',
		required: true,
		index: true
	},
	label: {
		type: String,
	},
	description: {
		type: String,
	}
});


// add timestamps (createdAt, updatedAt)
FieldDetailSchema.plugin(timestamp);

// add slug (slug)
FieldDetailSchema.plugin(URLSlugs('label'));

// add language (language)
FieldDetailSchema.plugin(languageplugin);

// Statics
FieldDetailSchema.statics.findByFieldId = function findByFieldId(fieldId, cb) {
	return this.find({ fieldId }, cb);
};

// helpers
FieldDetailSchema.query.byLanguage = function byLanguage(language) {
	return this.find({ language });
};

/**
 * FieldDetail mongoose model
 * @type {Object}
 */
const FieldDetail = mongoose.model('FieldDetail', FieldDetailSchema);

export default FieldDetail;
export { FieldDetailSchema };
