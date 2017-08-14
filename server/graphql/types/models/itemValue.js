import { GraphQLObjectType } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import ItemValue from '../../../models/itemValue';

// types
import userType from './user';

const config = {
	name: 'ItemValueType',
	description: 'ItemValue Schema base schema',
	class: 'GraphQLObjectType',
	schema: ItemValue.schema,
	exclude: ['_id'],
	extend: {
		
	}
};

const ItemValueType = createType(config);

export default ItemValueType;

