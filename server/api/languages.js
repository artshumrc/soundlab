import languages from 'languages';
import check from 'check-types';

export const getAllLanguages = () => languages.getAllLanguageCode();

export const checkLanguage = language => languages.isValid(language);

export const checkLanguages = (languageArray) => {
	check.assert.array(languageArray);
	return languageArray.every(language => checkLanguage(language));
};
