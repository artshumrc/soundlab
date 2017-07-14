import dotenv from 'dotenv';
import faker from 'faker';

import setupDB, { closeDB } from '../server/mongoose';

import generateUsers from '../server/__seeds/user';
import generateProjects from '../server/__seeds/project';
import generateMetadataPatterns from '../server/__seeds/metadataPattern';
import generateCollection from '../server/__seeds/collection';
import generateItem from '../server/__seeds/item';

dotenv.config();

const db = setupDB();

db.on('error', console.error)
	.on('disconnected', setupDB)
	.once('open', async () => {
		console.info(`Connected to mongodb ( host: ${db.host}, port: ${db.port}, name: ${db.name} )`);

		const ids = {};

		// generateUsers
		try {
			ids.users = await generateUsers(10);
		} catch (err) {
			console.error(err);
		}

		// generate projects with tenants
		try {
			ids.projects = await generateProjects(10, ids.users);
		} catch (err) {
			console.error(err);
		}

		try {
			ids.metadataPatternIds = await generateMetadataPatterns(5, 3);
		} catch (err) {
			console.error(err);
		}

		try {
			ids.collectionIds = await generateCollection(25, ids.projects, ids.metadataPatternIds);
		} catch (err) {
			console.error(err);
		}

		try {
			ids.itemIds = await generateItem(100, ids.collectionIds);
		} catch (err) {
			console.error(err);
		}

		console.log('ids', ids);

		// end seed generation process
		db.close(() => {
			console.log('Connection closed');
			process.exit(0);
		});
	});
