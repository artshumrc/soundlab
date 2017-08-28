import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// schema
import { TagSchema } from '../../../models/item';

const config = {
	name: 'TagType',
	description: 'Tag Schema base query type',
	class: 'GraphQLObjectType',
	schema: TagSchema,
	exclude: ['_id'],
};

const configInput = {
	name: 'TagInputType',
	description: 'Tag Schema base input type',
	class: 'GraphQLInputObjectType',
	schema: TagSchema,
	exclude: ['_id'],
};

const TagType = createType(config);
const TagInputType = createType(configInput);

export default TagType;
export { TagInputType };
