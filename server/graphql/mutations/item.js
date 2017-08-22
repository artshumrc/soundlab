import { GraphQLNonNull } from 'graphql';

// types
import ItemType, { ItemInputType } from '../types/models/item';

// models
import Item from '../../models/item';
import Collection from '../../models/collection';

// errors
import { AuthenticationError } from '../../errors';

const itemMutationFileds = {

	itemCreate: {
		type: ItemType,
		description: 'Create new item',
		args: {
			item: {
				type: new GraphQLNonNull(ItemInputType),
			},
		},
		async resolve(parent, { item }, { user, tenant }) {

			// 1. Validate connection
			// 
			// 2. Validate args? - done in grpahql and mongoose?
			// 
			// 3. Validate user permissions
			// 
			// 4. Run action

			// only a logged in user and coming from the admin page, can create new item
			if (user && tenant.adminPage) {

				try {
					// TODO validate collectionId
					const userIsOwner = await Collection.isUserOwner(item.collectionId, user._id);

					if (userIsOwner) return Item.create({ ...item });

				} catch (err) {
					throw err;
				}

			}
			throw new AuthenticationError();
		}
	}
};

export default itemMutationFileds;
