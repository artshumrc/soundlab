import mongoose from 'mongoose';

// plug-ins
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';
import language from './plugins/language';

const Schema = mongoose.Schema;

/**
 * FiledDetail base schema
 * @type {Schema}
 */
const FieldDetailSchema = new Schema({
	fieldId: {
		type: Schema.Types.ObjectId,
		ref: 'Filed',
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
FieldDetailSchema.plugin(language);

/**
 * FiledDetail mongoose model
 * @type {Object}
 */
const FiledDetail = mongoose.model('FiledDetail', FieldDetailSchema);

export default FiledDetail;
export { FieldDetailSchema };

