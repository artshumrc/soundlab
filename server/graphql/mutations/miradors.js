import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import miradorType from '../types/models/mirador';

// errors
import { AuthenticationError } from '../../errors';

const miradorMutationFileds = {

	mutationCreate: {
		type: miradorType,
		args: {
			title: {
				type: new GraphQLNonNull(GraphQLString)
			},
		},
		async resolve(parent, { title }, { user, tenant }) {

			if (user && tenant.adminPage) {
				const mirador = {
					title
				};

				return Mirador(mirador).save();
			}
			throw new AuthenticationError();
		}
	}
};

export default miradorMutationFileds;
