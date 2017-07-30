import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

require('mongoose-type-url');

const Schema = mongoose.Schema;

/**
 * Tenant base schema
 * @type {Schema}
 */
const TenantSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		index: true
	},
	projectId: {
		type: Schema.Types.ObjectId,
		ref: 'Project',
		index: true,
		required: true,
	}
});


// add timestamp (createdAt, updatedAt)
TenantSchema.plugin(timestamp);

// add slug (slug)
TenantSchema.plugin(URLSlugs('name'));

/**
 * Tenant mongoose model
 * @type {Object}
 */
const Tenant = mongoose.model('Tenant', TenantSchema);

export default Tenant;
export { TenantSchema };

