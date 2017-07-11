import createType from 'mongoose-schema-to-graphql';

import Tenant from '../../models/tenant';

const config = {
	name: 'tenantType',
	description: 'Tenant base schema',
	class: 'GraphQLObjectType',
	schema: Tenant.schema,
	exclude: ['_id'],
};

const tenantType = createType(config);

export default tenantType;
