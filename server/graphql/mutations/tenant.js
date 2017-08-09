import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import tenantType from '../../types/models/tenant';

// models
import Tenant from '../../models/tenant';

// errors
import { AuthenticationError } from '../../errors';

const tenantMutationFileds = {

	createTenant: {
		type: tenantType,
		description: 'Create new tenant',
		args: {

		},
		resolve(parent, args, { user, tenant }) {

			// only a logged in user and coming from the admin page, can create new tenant
			if (user && tenant.adminPage) {
				return Tenant.createByOwner(user._id);
			}
			throw AuthenticationError();
		}
	}
};

export default tenantMutationFileds;
