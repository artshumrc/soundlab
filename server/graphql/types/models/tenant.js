import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

import createType from 'mongoose-schema-to-graphql';

// model
import Tenant from '../../../models/tenant';

const config = {
	name: 'TenantType',
	description: 'Tenant base query type',
	class: 'GraphQLObjectType',
	schema: Tenant.schema,
	exclude: []
};

const configInput = {
	name: 'TenantInputType',
	description: 'Tenant base input type',
	class: 'GraphQLInputObjectType',
	schema: Tenant.schema,
	exclude: ['_id', 'homePage', 'adminPage', 'projectPage', 'slug', 'createdAt', 'updatedAt'],
};

const TenantType = createType(config);
const TenantInputType = createType(configInput);


export default TenantType;
export { TenantInputType };
