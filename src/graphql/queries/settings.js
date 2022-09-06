/**
 * Queries for settings
 */

import { GraphQLID, GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// types
import SettingsType from '../types/settings';

// logic
import SettingsService from '../logic/settings';


const settingsQueryFields = {
	settings: {
		type: SettingsType,
		description: 'Get project settings',
		async resolve(parent, {}, { token }) {
			const settingsService = new SettingsService({ token });
			return await settingsService.getSettings();
		}
	},
};

export default settingsQueryFields;
