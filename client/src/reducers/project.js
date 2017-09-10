import { ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT } from '../actions/project';

export default (state = [], action) => {
	switch (action.type) {
	case ADD_PROJECT:
		return [
			...state,
			action.project
		];
	case REMOVE_PROJECT:
		return state.filter(project => project._id !== action.projectId);
	default:
		return state;
	
	}
};
