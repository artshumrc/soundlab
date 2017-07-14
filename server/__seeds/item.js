import faker from 'faker';

// models
import Item from '../models/item';
import Collection from '../models/collection';
import MetadataPattern from '../models/metadataPattern';

// generators
import generateTenants from './tenant';

// utils
import { canSeed, generateData, notEmptyError, getRandom } from './utils';


const _insertOneItem = async (item) => {
	try {
		return await _registerUserPromiseWrapper(item);
	} catch (err) {
		throw err;
	}
};

const _insertData = async data => Promise.all(
	data.map(async (el) => {
		try {
			const newItem = new Item(el);
			const item = await newItem.save();
			return item._id;
		} catch (err) {
			throw err;
		}
	})
);

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

const _getMetadata = (metadataPattern) => {
	return Promise.all(metadataPattern.structure.map(async (struc) => {
		if (struc.patterId) {
			try {
				const newMetadataPattern = await MetadataPattern.findById(struc.patterId);
				return {
					key: struc.key,
					type: 'patternId',
					value: await _getMetadata(newMetadataPattern),
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
	}
))};

const generateItem = async (count, collectionIds) => {
	if (await canSeed(Item)) {

		const data = await generateData(count, async () => {

			try {
				const collection = await Collection.findById(getRandom(collectionIds));
				const metadataPattern = await MetadataPattern.findById(collection.metadataPatternId);
				// console.log('collection', collection)
				// console.log('metadataPattern', metadataPattern)

				return {
					title: faker.commerce.productName(),
					metadata: await _getMetadata(metadataPattern),
				};

			} catch (err) {
				throw err;
			}
		});

		try {
			const itemIds = await _insertData(data);
			return itemIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Item');
};

export default generateItem;
