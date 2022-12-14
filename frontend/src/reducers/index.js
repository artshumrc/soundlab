import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import playerReducer from './playerReducer';
import authReducers from '../modules/auth/reducers';
import client from '../middleware/apolloClient';
import * as ActionTypes from '../actions';


const errorMessage = (state = null, action) => {
	const {type, error} = action;

	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null;

	} else if (error) {
		return error;

	}

	return state;
};

const rootReducer = combineReducers({
	form: formReducer,
	errorMessage,
	apollo: client.reducer(), // graphql data
	routing: routerReducer,
	auth: authReducers,
	player: playerReducer,
});

export default rootReducer;
