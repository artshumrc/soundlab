import cors from 'cors';

import DataLoader from 'dataloader';
import createRedisDataLoader from 'redis-dataloader';

// model
import Project from './models/project';


export default function corsSetup(app, redisClient) {

	const RedisDataLoader = createRedisDataLoader({ redis: redisClient });

	const projectLoader = new RedisDataLoader(
		'project',
		new DataLoader(hosts => Promise.all(hosts.map(Project.findByHostname)), {
			cache: false
		}), {
			cache: false,
			expire: 60,
		}
	);

	const whitelist = ['http://generate-manifests.orphe.us'];

	if (process.env.NODE_ENV === 'development') {
		whitelist.push(process.env.CLIENT_SERVER);
	}

	// Check if tenant is white listed or in a database
	// Set the req.tenant value
	async function corsOptionsDelegate(req, callback) {
		const corsOptions = {
			origin: false,
			credentials: true,
		};

		const host = req.get('host');
		const tenant = await tenantLoader.load(host);

		if (tenant) {
			corsOptions.origin = true;

			req.tenant = tenant;
		} else if (whitelist.indexOf(req.header('Origin')) !== -1) {
			corsOptions.origin = true;
			console.error('Tenant white listed but not in the database! Graphql may have limited functionality.');
			req.tenant = null;

			if (process.env.NODE_ENV === 'development') {
				// TODO - delete this and rewrite to generate a tenant on development and on start of server
				req.tenant = {
					homePage: true,
					adminPage: true,
					projectPage: true,
				};
			}
		}

		callback(null, corsOptions);
	}

	// CORS:
	app.use(cors(corsOptionsDelegate));
}
