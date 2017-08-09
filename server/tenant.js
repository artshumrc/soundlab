// model
import Tenant from './models/tenant';

export default function tenantSetup(app) {
	app.use(async (req, res, next) => {
		const host = req.get('host');
		req.tenant = await Tenant.findByHost(host);

		if (process.env.NODE_ENV === 'production') {
			throw new Error('Not allowed');
		} else if (process.env.NODE_ENV === 'development') {
			req.tenant = {
				homePage: true,
				adminPage: true,
				projectPage: true,
			};
		}

		next();
	});
}
