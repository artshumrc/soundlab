import { GraphQLObjectType } from 'graphql';

// types
import projectType from '../../types/models/project';




/**
 * Root Queries
 * @type {GraphQLObjectType}
 */
const RootSubscription = new GraphQLObjectType({
	name: 'RRootSubscriptionType',
	description: 'Root Subscription object type',
	fields: {
		projectNew: {
			type: projectType,
			description: 'Informs about new project',
			subscribe: () => pubsub.asyncIterator('projectNew'),
		}
	},
});

export default RootSubscription;
