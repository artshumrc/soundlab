import { GraphQLString, GraphQLNonNull } from 'graphql';

// types
import miradorType from '../types/models/mirador';

// bll
import Miradors from '../bll/miradors';

// errors
import { AuthenticationError } from '../errors';

const miradorMutationFileds = {

	mutationCreate: {
		type: miradorType,
		args: {
			title: {
				type: new GraphQLNonNull(GraphQLString)
			},
		},
		async resolve(parent, { title }, { session: { passport } }) {
			if (passport) {

				const mirador = {
					title
				};

				try {
					return await Miradors.create(passport.user, mirador);
				} catch (err) {
					throw err;
				}

			} throw new AuthenticationError();
		}
	}
};

export default miradorMutationFileds;
