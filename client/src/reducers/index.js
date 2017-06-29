// import merge from 'lodash.merge';
import { combineReducers } from 'redux';

import * as ActionTypes from '../actions';

// const defaultState = {
// };

const errorMessage = (state = null, action) => {
	const { type, error } = action;

	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null;
	} else if (error) {
		return error;
	}

	return state;
};

const rootReducer = combineReducers({
	errorMessage,
});

export default rootReducer;
