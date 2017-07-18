import dotenv from 'dotenv';

// models
import collection from '../server/models/collection';
import item from '../server/models/item';
import metadataPattern from '../server/models/metadataPattern';
import project from '../server/models/project';
import tenant from '../server/models/tenant';
import user from '../server/models/user';

import setupDB, { closeDB } from '../server/mongoose';

dotenv.config();

const db = setupDB();

const allModels = [
	collection,
	item,
	metadataPattern,
	project,
	tenant,
	user,
];

db.on('error', console.error)
	.on('disconnected', setupDB)
	.once('open', async () => {
		console.info(`Connected to mongodb ( host: ${db.host}, port: ${db.port}, name: ${db.name} )`);

		await Promise.all(allModels.map(async (Model) => {
			try {
				await Model.remove();
			} catch (err) {
				throw err;
			}
		}));

		// end seed generation process
		db.close(() => {
			console.log('Connection closed');
			process.exit(0);
		});
	});
