import oauthshim from 'oauth-shim';

const oauthSetup = (app) => {

	app.all('/oauthproxy', oauthshim);

	oauthshim.init([{
		// id : 'secret',
		client_id: process.env.TWITTER_CLIENT_ID,
		client_secret: process.env.TWITTER_SECRET,
		// Define the grant_url where to exchange Authorisation codes for tokens
		grant_url: process.env.TWITTER_API_ENDPOINT,
		// Restrict the callback URL to a delimited list of callback paths
		// domain: 'orpheus.dev.michalpierzchlewicz.pl/'
	}]);
};

export default oauthSetup;
