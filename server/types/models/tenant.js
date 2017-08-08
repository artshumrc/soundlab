import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

import createType from 'mongoose-schema-to-graphql';

// model
import Tenant from '../../models/tenant';

const config = {
	name: 'TenantType',
	description: 'Tenant base type',
	class: 'GraphQLObjectType',
	schema: Tenant.schema,
	exclude: ['_id']
};

const TenantType = createType(config);


export default TenantType;
