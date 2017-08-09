import DataLoader from 'dataloader';
import createRedisDataLoader from 'redis-dataloader';

// model
import Tenant from './models/tenant';

export default function tenantSetup(app, redisClient) {

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

	app.use(async (req, res, next) => {
		
		const host = req.get('host');
		req.tenant = await tenantLoader.load(host);

		if (process.env.NODE_ENV === 'production') {
			throw new Error('Not allowed');
		} else if (process.env.NODE_ENV === 'development' && !req.tenant) {
			req.tenant = {
				homePage: true,
				adminPage: true,
				projectPage: true,
			};
		}

		next();
	});
}
