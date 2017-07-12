import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

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
});


// add timestamp (createdAt, updatedAt)
TenantSchema.plugin(timestamp);

// add slug (slug)
TenantSchema.plugin(URLSlugs('name'));

/**
 * Tenant mongoose model
 * @type {mongoose model}
 */
const Tenant = mongoose.model('Tenant', TenantSchema);

export default Tenant;
export { TenantSchema };

