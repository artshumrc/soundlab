import { graphqlExpress, graphiqlExpress  } from 'graphql-server-express';
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

	app.use('/graphql', graphqlExpress({
		schema: RootSchema,
		formatError,
	}));

	app.use('/graphiql', graphiqlExpress({
		endpointURL: '/graphql',
		subscriptionsEndpoint: `ws://192.168.0.24:3002/subscriptions`
	}));

	// Wrap the Express server
	const ws = createServer(app);
	ws.listen(3002, () => {
		console.log(`GraphQL Server is now running on http://localhost:${3002}`);
		// Set up the WebSocket for handling GraphQL subscriptions
		const subscriptionsServer = new SubscriptionServer({
			execute,
			subscribe,
			schema: RootSchema,
		}, {
			server: ws,
			path: '/subscriptions',
		});
	});
}
