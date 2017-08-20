import faker from 'faker';

// models
import ItemSchema from '../models/itemSchema';

// utils
import { canSeed, generateData, insertData, notEmptyError, getRandom } from './utils';

const _generateSingleValueItemSchemas = async () => {
	const data = await generateData(10, () => {
		return {
			name: faker.commerce.productName(),
			private: false,
		};
	});

	try {
		const itemSchemaIds = await insertData(data, ItemSchema, ['name']);
		return itemSchemaIds;
	} catch (err) {
		throw err;
	}
};

const _generateMultiValueItemSchemas = async (count) => {
	const data = await generateData(count, () => {
		const structureCount = Math.floor((Math.random() * 5) + 1); // generates random number between 1 - 5
		const structure = [];
		for (let i = 0; i < structureCount; i += 1) {
			const title = faker.commerce.productName();
			structure.push({
				key: faker.helpers.slugify(title),
				title,
				type: getRandom(metadataTypes),
			});
		}

		return {
			name: faker.commerce.productName(),
			structure,
		};
	});

	try {
		const metadataItemSchemaIds = await insertData(data, ItemSchema, ['name']);
		return metadataItemSchemaIds;
	} catch (err) {
		throw err;
	}
};

const _generateNestedItemSchemas = async (count, patternIds) => {
	const data = await generateData(count, () => {
		const structureCount = Math.floor((Math.random() * 5) + 1); // generates random number between 1 - 5
		const structure = [];
		for (let i = 0; i < structureCount; i += 1) {
			const title = faker.commerce.productName();
			structure.push({
				key: faker.helpers.slugify(title),
				title,
				patterId: getRandom(patternIds),
			});
		}

		return {
			name: faker.commerce.productName(),
			structure,
		};
	});

	try {
		const metadataItemSchemaIds = await insertData(data, ItemSchema, ['name']);
		return metadataItemSchemaIds;
	} catch (err) {
		throw err;
	}
};


const generateItemSchemas = async (countMulti, countNested) => {
	if (await canSeed(ItemSchema)) {

		const singleValueItemSchemaIds = await _generateSingleValueItemSchemas();

		return [...singleValueItemSchemaIds];
	}
	throw notEmptyError('ItemSchema');
};

export default generateItemSchemas;
