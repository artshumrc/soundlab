export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (name, value) => ({
	type: CHANGE_VALUE,
	name: name,
	currentValue: value
});
