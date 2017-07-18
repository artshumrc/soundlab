
export const setLocalStorageItem = (key, value) => {
	if (typeof Storage !== 'undefined') {
		localStorage[key] = value;
	} else {
		throw new Error('Storage not available');
	}
};
