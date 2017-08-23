import { GraphQLNonNull } from 'graphql';

// types
import ItemType, { ItemInputType } from '../types/models/item';

// models
import Item from '../../models/item';
import Collection from '../../models/collection';

// errors
import {
	AuthenticationError,
	PermissionError,
	TenantError,
	ArgumentError,
	MongooseDuplicateKeyError,
	MongooseValidationError
} from '../../errors';


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

			/**
			 * Validate connection
			 */

			// if operation doesn't come from admin page
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();


			/**
			 * Validate resolver specific arguments
			 */
			
			// collectionId is required
			if (!item.collectionId) throw new ArgumentError({ data: { field: 'collectionId' } });


			/**
			 * Validate permissions
			 */
			
			// check if user is owner of the project to which collection an item is added
			try {
				const userIsOwner = await Collection.isUserOwner(item.collectionId, user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw err;
			}


			/**
			 * Perform action
			 */
			
			// create new item
			try {
				return await Item.create({ ...item });
			} catch (err) {

				/**
				 * Mongoose errors
				 */

				// handle duplicate key error
				if (err.name === 'MongoError' && err.code === 11000) {
					throw new MongooseDuplicateKeyError({
						data: {
							errmsg: err.errmsg
						}
					});
				}

				// handle validation errors
				if (err.errors) {
					throw new MongooseValidationError({
						data: err.errors,
					});
				}
			}
			// TODO handling field validation
		},
	},
};

export default itemMutationFileds;
