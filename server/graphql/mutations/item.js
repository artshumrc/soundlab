import { GraphQLNonNull, GraphQLID } from 'graphql';

// types
import ItemType, { ItemCreateInputType, ItemUpdateInputType } from '../types/models/item';
import { RemoveType } from '../types';

// models
import Item from '../../models/item';
import Collection from '../../models/collection';

// errors
import {
	AuthenticationError,
	PermissionError,
	TenantError,
	ArgumentError,
	// MongooseGeneralError,
	// MongooseDuplicateKeyError,
	// MongooseValidationError,
	handleMongooseError,
} from '../errors';


const itemMutationFileds = {

	itemCreate: {
		type: ItemType,
		description: 'Create new item',
		args: {
			item: {
				type: new GraphQLNonNull(ItemCreateInputType),
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
			if (!item.collectionId) throw new ArgumentError({ data: { field: 'item.collectionId' } });


			/**
			 * Initiate item
			 */
			const NewItem = new Item(item);


			/**
			 * Validate permissions
			 */
			
			// check user permissions
			try {
				const userIsOwner = await NewItem.validateUser(user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw new PermissionError();
			}


			/**
			 * Perform action
			 */
			
			// save new item
			try {
				return await NewItem.save();
			} catch (err) {
				handleMongooseError(err);
			}
		},
	},

	itemUpdate: {
		type: ItemType,
		description: 'Update item',
		args: {
			item: {
				type: new GraphQLNonNull(ItemUpdateInputType),
			},
			itemId: {
				type: new GraphQLNonNull(GraphQLID),
			}
		},
		async resolve(parent, { item, itemId }, { user, tenant }) {

			/**
			 * Validate connection
			 */

			// if operation doesn't come from admin page
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();


			/**
			 * Initiate item
			 */
			const FoundItem = await Item.findById(itemId);
			if (!FoundItem) throw new ArgumentError({ data: { field: 'itemId' } });


			/**
			 * Validate permissions
			 */
			try {
				const userIsOwner = await FoundItem.validateUser(user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw new PermissionError();
			}
			
			
			
			/**
			 * Perform action
			 */
			
			// update item
			Object.keys(item).forEach((key) => {
				FoundItem[key] = item[key];
			});

			// Save new item
			try {
				return await FoundItem.save();
			} catch (err) {
				handleMongooseError(err);
			}
		}
	},

	itemRemove: {
		type: RemoveType,
		description: 'Remove item',
		args: {
			itemId: {
				type: new GraphQLNonNull(GraphQLID),
			}
		},
		async resolve(parent, { itemId }, { user, tenant }) {

			/**
			 * Validate connection
			 */

			// if operation doesn't come from admin page
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();


			/**
			 * Initiate item
			 */
			const FoundItem = await Item.findById(itemId);
			if (!FoundItem) throw new ArgumentError({ data: { field: 'itemId' } });


			/**
			 * Validate permissions
			 */
			try {
				const userIsOwner = await FoundItem.validateUser(user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw new PermissionError();
			}
			
			
			/**
			 * Perform action
			 */

			// Save new item
			try {
				await FoundItem.remove();
				return {
					_id: itemId,
				};
			} catch (err) {
				handleMongooseError(err);
			}
		}
	},
};

export default itemMutationFileds;
