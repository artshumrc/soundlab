// @flow

export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export const addProject = project => ({
	type: ADD_PROJECT,
	project
});

export const RemoveProject = projectId => ({
	type: REMOVE_PROJECT,
	projectId
});

export const updateProject = () => ({
	type: UPDATE_PROJECT
});
