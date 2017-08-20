import faker from 'faker';
import shortid from 'shortid';

// models
import Item from '../models/item';
import ItemSchema from '../models/itemSchema';
import Collection from '../models/collection';

// utils
import { canSeed, generateData, insertData, notEmptyError, getRandom } from './utils';


const _arrayGenerator = (valueMethod) => {
	const arraySize = Math.floor((Math.random() * 10) + 1);
	const array = Array.from(Array(arraySize));
	return array.map(() => valueMethod());
};

const _getValue = (type) => {
	let value = null;
	switch(type) {
	case 'String':
		value = faker.lorem.words();
		break;
	case 'Number':
		value = faker.random.number();
		break;
	case 'Boolean':
		value = faker.random.boolean();
		break;
	case 'Array/String':
		value = _arrayGenerator(faker.lorem.words);
		break;
	case 'Array/Number':
		value = _arrayGenerator(faker.random.number);
		break;
	case 'Array/Boolean':
		value = _arrayGenerator(faker.random.boolean);
		break;
	}
	return value;
};

const _getItemSchema = (itemSchema) => {
	return Promise.all([async (struc) => {
		if (struc._id) {
			try {
				const newItemSchema = await ItemSchema.findById(struc.itemSchemaId);
				return {
					name: struc.name,
					type: 'itemSchemaId',
					// value: await _getValue(newItemSchema),
				};
			} catch (err) {
				throw err;
			}
		}

		return {
			key: struc.key,
			type: struc.type,
			value: _getValue(struc.type),
		};
	}]);
};


const generateItem = async (count, collectionIds) => {
	if (await canSeed(Item)) {

		const data = await generateData(count, async () => {

			try {
				const collection = await Collection.findById(getRandom(collectionIds));
				const metadataPattern = await ItemSchema.findById(collection.itemSchemaId);

				let title = faker.commerce.productName();

				while (await Item.findOne({ title: title })) {
					title = faker.commerce.productName();
				};

				return {
					title,
					metadata: await _getItemSchema(metadataPattern),
				};

			} catch (err) {
				throw err;
			}
		});

		try {
			const itemIds = await insertData(data, Item);
			return itemIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Item');
};

export default generateItem;
