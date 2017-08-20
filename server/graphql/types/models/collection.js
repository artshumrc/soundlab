import { GraphQLList, GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Collection from '../../../models/collection';
import Item from '../../../models/item';
import CollectionDetail from '../../../models/collectionDetail';

// types
import ItemType from './item';
import CollectionDetailType from './collectionDetail';


const config = {
	name: 'CollectionType',
	description: 'Collection base schema',
	class: 'GraphQLObjectType',
	schema: Collection.schema,
	exclude: ['_id', 'projectId', 'itemSchemaId'],
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
		},
		detail: {
			type: CollectionDetailType,
			resolve(collection, args, context) {
				return CollectionDetail.findByCollectionId(collection._id);
			}
		}
	}
};

const CollectionType = createType(config);

export default CollectionType;
