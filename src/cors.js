import cors from 'cors';

import DataLoader from 'dataloader';



export default function corsSetup(app) {

	const whitelist = ['http://generate-manifests.orphe.us', 'http://soundlab.fas.harvard.edu', 'http://admin.soundlab.orphe.us'];

	if (process.env.NODE_ENV === 'development') {
		whitelist.push(process.env.CLIENT_SERVER);
	}

	// Check if project is white listed or in a database
	// Set the req.project value
	async function corsOptionsDelegate(req, callback) {
		const corsOptions = {
			origin: false,
			credentials: true,
		};

		const hostname = req.hostname;
		let project;

		corsOptions.origin = true;
		req.project = null;

		// const project = await projectLoader.load(hostname);
		// console.error('Project white listed but not in the database! Graphql may have limited functionality.');

		if (process.env.NODE_ENV === 'development') {
			// TODO - delete this and rewrite to generate a project on development and on start of server
			req.project = {
				title: '',
				hostname: 'localhost',
				description: '',
				users: [],
			};
		}

		callback(null, corsOptions);
	}

	// CORS:
	app.use(cors(corsOptionsDelegate));
}
