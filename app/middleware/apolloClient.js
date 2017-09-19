import { ApolloClient, createNetworkInterface } from 'react-apollo';
import Cookies from 'universal-cookie';

import { publicSettings } from '../../settings';

const cookies = new Cookies();

const networkInterface = createNetworkInterface({
	uri: `${publicSettings.apiURI}/graphql`,
	opts: {
	 	credentials: 'include',
	}
});

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {}; // Create the header object if needed.
		}
		req.options.headers.authorization = cookies.get('token') ? cookies.get('token') : null;
		next();
	}
}]);

const connectionParams = () => ({ authToken: cookies.get('token') ? cookies.get('token') : null });

const client = new ApolloClient({
	networkInterface
});


export default client;
