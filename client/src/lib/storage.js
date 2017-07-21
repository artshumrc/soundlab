
export const setLocalStorageItem = (key, value) => {
	if (typeof Storage !== 'undefined') {
		localStorage.setItem(key, value);
	} else {
		throw new Error('Storage not available');
	}
};

export const removeLocalStorageItem = (key) => {
	if (typeof Storage !== 'undefined') {
		localStorage.removeItem(key);
	} else {
		throw new Error('Storage not available');
	}
};
