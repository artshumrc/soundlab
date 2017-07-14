import faker from 'faker';

// models
import Collection from '../models/collection';

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
	data.map(async (item) => {
		try {
			const newCollection = new Collection(item);
			const collection = await newCollection.save();
			return collection._id;
		} catch (err) {
			throw err;
		}
	})
);

const generateCollection = async (count, projectIds, metadataPatternIds) => {
	if (await canSeed(Collection)) {

		const data = await generateData(count, async () => ({
			title: faker.commerce.productName(),
			projectId: getRandom(projectIds),
			metadataPatternId: getRandom(metadataPatternIds),
		}));

		try {
			const collectionIds = await _insertData(data);
			return collectionIds;
		} catch (err) {
			throw err;
		}
	}
	throw notEmptyError('Collection');
};

export default generateCollection;
