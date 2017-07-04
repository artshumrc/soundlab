import { GraphQLObjectType } from 'graphql';

import projectFileds from './projects';

const RootMutations = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		...projectFileds,
	}
});

export default RootMutations;
