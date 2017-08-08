// import { GraphQLList } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import ItemSchema from '../../models/itemSchema';
import Field from '../../models/field';

// types
import FieldType from './field';

const config = {
	name: 'ItemSchemaType',
	description: 'Item Schema base schema',
	class: 'GraphQLObjectType',
	schema: ItemSchema.schema,
	exclude: ['_id', 'projectId', 'itemSchemaId'],
	extend: {
		fields: {
			type: FieldType,
			resolve(itemSchema, args, context) {
				return Field.findByItemSchemaId(itemSchema._id);
			}
		}
	}
};

const ItemSchemaType = createType(config);

export default ItemSchemaType;
