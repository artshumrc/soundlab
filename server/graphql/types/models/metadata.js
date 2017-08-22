import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// schema
import { MetadataSchema } from '../../../models/item';

const config = {
	name: 'MetadataType',
	description: 'Tag Schema base query type',
	class: 'GraphQLObjectType',
	schema: MetadataSchema,
	exclude: ['_id'],
};

const configInput = {
	name: 'MetadataInputType',
	description: 'Tag Schema base input type',
	class: 'GraphQLInputObjectType',
	schema: MetadataSchema,
	exclude: ['_id'],
};

const MetadataType = createType(config);
const MetadataInputType = createType(configInput);

export default MetadataType;
export { MetadataInputType };
