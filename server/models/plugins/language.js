import languages from 'languages';

export default function languagePlugin(schema, options) {

	let required = true;
	if (options && typeof options.required === 'boolean') required = options.required;

	let defaultValue = 'en';
	if (options && typeof options.defaultValue === 'string') defaultValue = options.defaultValue;

	schema.add({
		language: {
			type: String,
			required,
			default: defaultValue,
			enum: languages.getAllLanguageCode(),
		}
	});

	if (options && options.index) {
		schema.path('language').index(options.index);
	}
}
