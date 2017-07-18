import createType from 'mongoose-schema-to-graphql';

import User from '../../models/user';

const config = {
	name: 'userType',
	description: 'User base schema',
	class: 'GraphQLObjectType',
	schema: User.schema,
	exclude: ['_id', 'password', 'hash', 'salt'],
};

const userType = createType(config);

export default userType;
