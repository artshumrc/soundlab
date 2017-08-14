import createType from 'mongoose-schema-to-graphql';

// models
import FieldDetail from '../../../models/fieldDetail';


const config = {
	name: 'FieldDetailType',
	description: 'Collection Detail base schema',
	class: 'GraphQLObjectType',
	schema: FieldDetail.schema,
	exclude: ['_id'],
};

const FieldDetailType = createType(config);

export default FieldDetailType;
