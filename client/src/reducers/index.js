import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import client from '../middleware/apolloClient';
import exampleForm from '../reducers/exampleForm';


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
  exampleForm,
  errorMessage,
  apollo: client.reducer(), // graphql data
  routing: routerReducer
});

export default rootReducer;
