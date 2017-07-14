
export const canSeed = async Model => Model.count().exec().then(count => count === 0);

export const generateData = (DATA_COUNT, getDataStructure) => {
	const iterator = Array.from(Array(DATA_COUNT));

	return Promise.all(iterator.map(async () => {
		try {
			const data = await getDataStructure();
			return data;
		} catch (err) {
			throw err;
		}
	}));
};

export const notEmptyError = modal => new Error(`Can not generate seeds - ${modal} collection is not empty`);

export const getRandom = array => array[Math.floor(Math.random() * array.length)];
