import faker from 'faker';

// models
import MetadataPattern, { metadataTypes } from '../models/metadataPattern';

// utils
import { canSeed, generateData, notEmptyError, getRandom } from './utils';

const metadataTypesCopy = metadataTypes.slice();

const _insertOneItem = async (item) => {
	try {
		return await _registerUserPromiseWrapper(item);
	} catch (err) {
		throw err;
	}
};

const _insertData = async data => Promise.all(
	data.map(async (item) => {
		try {
			const newMetadataPattern = new MetadataPattern(item);
			const metadataPattern = await newMetadataPattern.save();
			return metadataPattern._id;
		} catch (err) {
			throw err;
		}
	})
);

const _getType = () => {
	const type = metadataTypesCopy[0];
	metadataTypesCopy.splice(0, 1);
	return type;
};

const _generateSingleValuePatterns = async () => {
	const count = metadataTypes.length;
	const data = await generateData(count, () => {
		const type = _getType();
		return {
			name: type,
			structure: {
				key: type,
				title: type,
				type: type,
			}
		};
	});

	try {
		const metadataPatternIds = await _insertData(data);
		return metadataPatternIds;
	} catch (err) {
		throw err;
	}
};

const _generateMultiValuePatterns = async (count) => {
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
		const metadataPatternIds = await _insertData(data);
		return metadataPatternIds;
	} catch (err) {
		throw err;
	}
};

const _generateNestedPatterns = async (count, patternIds) => {
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
		const metadataPatternIds = await _insertData(data);
		return metadataPatternIds;
	} catch (err) {
		throw err;
	}
};


const generateMetadataPatterns = async (countMulti, countNested) => {
	if (await canSeed(MetadataPattern)) {

		const singelValuePatternIds = await _generateSingleValuePatterns();

		const multiValuePatternIds = await _generateMultiValuePatterns(countMulti);

		const nestedPatternIds = await _generateNestedPatterns(countNested, [...singelValuePatternIds, ...multiValuePatternIds]);
		
		return [...singelValuePatternIds, ...multiValuePatternIds, ...nestedPatternIds];
	}
	throw notEmptyError('MetadataPattern');
};

export default generateMetadataPatterns;
