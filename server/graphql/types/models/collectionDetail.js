import createType from 'mongoose-schema-to-graphql';

// models
import CollectionDetail from '../../../models/collectionDetail';


const config = {
	name: 'CollectionDetailType',
	description: 'Collection Detail base schema',
	class: 'GraphQLObjectType',
	schema: CollectionDetail.schema,
	exclude: ['_id'],
};

const CollectionDetailType = createType(config);

export default CollectionDetailType;
