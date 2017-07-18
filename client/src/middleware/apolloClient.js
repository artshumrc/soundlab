import { ApolloClient, createNetworkInterface } from 'react-apollo';

require('../lib/auth');

const networkInterface = createNetworkInterface({
	uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/${process.env.REACT_APP_GRAPHQL_URI}`,
	opts: {
		credentials: 'include',
	}
});

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {}; // Create the header object if needed.
		}
		req.options.headers['authorization'] = localStorage.getItem('token') ? localStorage.getItem('token') : null;
		next();
	}
}]);

const client = new ApolloClient({
	networkInterface,
});

export default client; 
