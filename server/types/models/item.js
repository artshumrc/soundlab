import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Item from '../../models/item';
import ItemValue from '../../models/itemValue';

// types
import ItemValueType from './itemValue';

const config = {
	name: 'ItemType',
	description: 'Item Schema base schema',
	class: 'GraphQLObjectType',
	schema: Item.schema,
	exclude: ['_id'],
	extend: {
		values: {
			type: new GraphQLList(ItemValueType),
			resolve(item, args, context) {
				return ItemValue.findByItemId(item._id);
			},
		},
		value: {
			type: ItemValueType,
			args: {
				_id: {
					type: GraphQLID,
				},
			},
			resolve(item, { _id }, context) {
				return ItemValue.findById(_id);
			},
		},
	}
};

const ItemType = createType(config);

export default ItemType;

