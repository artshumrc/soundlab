import cors from 'cors';

export default function corsSetup(app) {
	// CORS:
	const whitelist = ['http://192.168.0.24:3001', process.env.CLIENT_SERVER];

	const corsOptionsDelegate = function (req, callback) {
		const corsOptions = {
			origin: false,
		};
		if (whitelist.indexOf(req.header('Origin')) !== -1) {
			corsOptions.origin = true;
		}
		callback(null, corsOptions);
	};

	app.use(cors(corsOptionsDelegate));
}
