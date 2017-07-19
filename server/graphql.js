import graphqlHTTP from 'express-graphql';
import { formatError } from 'apollo-errors';
import { GraphQLSchema, execute, subscribe } from 'graphql';
import { maskErrors } from 'graphql-errors';
import { createServer } from 'http';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import RootQuery from './graphql/queries/rootQuery';
import RootMutation from './graphql/mutations/rootMutation';
import RootSubscription from './graphql/subscriptions/rootSubscription';


/**
 * Root schema
 * @type {GraphQLSchema}
 */
const RootSchema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
	subscription: RootSubscription,
});

// mask error messages
maskErrors(RootSchema);

export const pubsub = new PubSub();


/**
 * Set up the graphQL HTTP endpoint
 * @param  {Object} app 	express app instance
 */
export default function setupGraphql(app) {
	// GraphQL server
	app.use('/graphql', graphqlHTTP({
		schema: RootSchema,
		formatError,
		graphiql: true
	}));

	const server = createServer(app);

	server.listen(process.env.PORT_WS || 3002, () => {
		new SubscriptionServer({
			execute,
			subscribe,
			schema: RootSchema,
		}, {
			server: server,
			path: '/subscriptions',
		});
	});

}
