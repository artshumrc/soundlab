import { GraphQLList, GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Collection from '../../../models/collection';
import Item from '../../../models/item';

// types
import ItemType from './item';


const config = {
	name: 'CollectionType',
	description: 'Collection base query type',
	class: 'GraphQLObjectType',
	schema: Collection.schema,
	exclude: ['_id', 'projectId'],
	extend: {
		items: {
			type: new GraphQLList(ItemType),
			args: {
				skip: {
					type: GraphQLInt,
				},
				limit: {
					type: GraphQLInt,
				}
			},
			resolve(collection, { skip = 0, limit = 10 }) {
				return Item.find({}).skip(skip).limit(limit);
			}
		},
		item: {
			type: ItemType,
			args: {
				_id: {
					type: GraphQLID,
				},
			},
			resolve(collection, { _id }) {
				return Item.findById(_id);
			}
		}
	}
};

const configInput = {
	name: 'CollectionInputType',
	description: 'Collection base input type',
	class: 'GraphQLInputObjectType',
	schema: Collection.schema,
	exclude: ['_id', 'slug', 'createdAt', 'updatedAt'],
};

const CollectionType = createType(config);
const CollectionInputType = createType(configInput);

export default CollectionType;
export { CollectionInputType };
