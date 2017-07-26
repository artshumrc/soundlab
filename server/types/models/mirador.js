import createType from 'mongoose-schema-to-graphql';

// models
import Mirador from '../../models/mirador';

const config = {
	name: 'miradorType',
	description: 'Mirador base schema',
	class: 'GraphQLObjectType',
	schema: Mirador.schema,
	exclude: ['_id']
};

const miradorType = createType(config);

export default miradorType;
