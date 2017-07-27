import cors from 'cors';

export default function corsSetup(app) {
	// CORS:
	const whitelist = [process.env.CLIENT_SERVER, 'http://192.168.0.24:3001', 'http://192.168.0.6', 'http://generate-manifests.orphe.us'];

	const corsOptionsDelegate = function (req, callback) {
		const corsOptions = {
			origin: false,
			credentials: true,
		};
		if (whitelist.indexOf(req.header('Origin')) !== -1) {
			corsOptions.origin = true;
		}
		callback(null, corsOptions);
	};

	app.use(cors(corsOptionsDelegate));
}
