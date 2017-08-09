import { GraphQLList, GraphQLString } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import Field from '../../../models/field';
import FieldDetail from '../../../models/fieldDetail';

// types
import FieldDetailType from './fieldDetail';

const config = {
	name: 'FieldType',
	description: 'Field Schema base schema',
	class: 'GraphQLObjectType',
	schema: Field.schema,
	exclude: ['_id'],
	extend: {
		detail: {
			type: FieldDetailType,
			args: {
				language: {
					type: GraphQLString,
				},
			},
			resolve(field, { language = process.env.DEFAULT_LANGUAGE }, context) {
				return FieldDetail.findByFieldId(field._id).byLanguage(language);
			}
		}
	}
};

const FieldType = createType(config);

export default FieldType;

