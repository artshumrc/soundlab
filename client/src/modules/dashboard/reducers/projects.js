import * as types from '../actions/projects';

export default (state = [], action) => {
	switch (action.type) {
	case types.ADD_PROJECT:
		return {
			...state,
			projects: [...state.user.projects, action.projectDetails]
		};
	default:
		return state;
	}
};
