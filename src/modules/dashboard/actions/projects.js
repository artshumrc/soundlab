export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export const addProject = ({ projectDetails }) => ({
	type: ADD_PROJECT
});

export const removeProject = () => ({
	type: REMOVE_PROJECT
});

export const updateProject = () => ({
	type: UPDATE_PROJECT
});
