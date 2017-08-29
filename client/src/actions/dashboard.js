// @flow

export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT_DESCRIPTION = 'UPDATE_PROJECT_DESCRIPTION';

export const addProject = (projectDetails: object) => ({
  type: ADD_PROJECT
});

export const RemoveProject = () => ({
  type: REMOVE_PROJECT
});

export const updateProject = () => ({
  type: UPDATE_PROJECT
});
