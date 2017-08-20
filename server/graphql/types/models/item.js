import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Item from '../../../models/item';
import File from '../../../models/file';

// types
import FileType from './tenant';

const config = {
	name: 'ItemType',
	description: 'Item Schema base schema',
	class: 'GraphQLObjectType',
	schema: Item.schema,
	exclude: ['_id'],
	extend: {
		files: {
			type: new GraphQLList(FileType),
			description: 'Get all item files',
			resolve(item, args, context) {
				return File.getByItemId(item._id);
			}
		},
	}
};

const ItemType = createType(config);

export default ItemType;

