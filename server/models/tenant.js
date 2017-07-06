import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';
import URLSlugs from 'mongoose-url-slugs';

const Schema = mongoose.Schema;

const TenantSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
});


// add timestamp (createdAt, updatedAt)
TenantSchema.plugin(timestamp);

// add slug (slug)
TenantSchema.plugin(URLSlugs('title'));


const Tenant = mongoose.model('Tenant', TenantSchema);

export default Tenant;
