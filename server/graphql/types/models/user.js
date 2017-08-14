import createType from 'mongoose-schema-to-graphql';

// models
import User from '../../../models/user';


const config = {
	name: 'UserType',
	description: 'User base schema',
	class: 'GraphQLObjectType',
	schema: User.schema,
	exclude: ['_id', 'password', 'hash', 'salt'],
	extend: { }
};

const UserType = createType(config);

export default UserType;
