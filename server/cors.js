import cors from 'cors';

import DataLoader from 'dataloader';
import createRedisDataLoader from 'redis-dataloader';

// model
import Tenant from './models/tenant';


export default function corsSetup(app, redisClient) {

	const RedisDataLoader = createRedisDataLoader({ redis: redisClient });

	const tenantLoader = new RedisDataLoader(
		'tenant',
		new DataLoader(hosts => Promise.all(hosts.map(Tenant.findByHost)), {
			cache: false
		}), {
			cache: false,
			expire: 60,
		}
	);

	const whitelist = [process.env.CLIENT_SERVER, 'http://192.168.0.24:3001', 'http://192.168.0.6', 'http://generate-manifests.orphe.us'];

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
