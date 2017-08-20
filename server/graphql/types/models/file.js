import { GraphQLList, GraphQLID } from 'graphql';
import createType from 'mongoose-schema-to-graphql';

// models
import File from '../../../models/file';

// types


const config = {
	name: 'FileType',
	description: 'File Schema base schema',
	class: 'GraphQLObjectType',
	schema: File.schema,
	exclude: ['_id'],
	extend: {}
};

const FileType = createType(config);

export default FileType;

