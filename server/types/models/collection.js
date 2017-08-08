import { GraphQLList, GraphQLInt, GraphQLString, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Collection from '../../models/collection';
import ItemSchema from '../../models/itemSchema';
import Item from '../../models/item';
import CollectionDetail from '../../models/collectionDetail';

// types
import ItemSchemaType from './itemSchema';
import ItemType from './item';
import CollectionDetailType from './collectionDetail';


const config = {
	name: 'CollectionType',
	description: 'Collection base schema',
	class: 'GraphQLObjectType',
	schema: Collection.schema,
	exclude: ['_id', 'projectId', 'itemSchemaId'],
	extend: {
		itemSchema: {
			type: ItemSchemaType,
			resolve(collection, arg, context) {
				return ItemSchema.findById(collection.itemSchemaId);
			}
		},
		items: {
			type: new GraphQLList(ItemType),
			args: {
				offset: {
					type: GraphQLInt,
				},
				limit: {
					type: GraphQLInt,
				}
			},
			resolve(collection, { offset = 0, limit = 10 }) {
				return Item.paginate({}, { offset, limit });
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
			args: {
				language: {
					type: GraphQLString,
				},
			},
			resolve(collection, { language = process.env.DEFAULT_LANGUAGE }, context) {
				return CollectionDetail.findByCollectionId(collection._id).byLanguage(language);
			}
		}
	}
};

const CollectionType = createType(config);

export default CollectionType;
