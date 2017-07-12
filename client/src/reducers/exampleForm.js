import { modelReducer, formReducer, combineForms} from 'react-redux-form';
import {combineReducers} from 'redux';

const initialState = {
  username: 'test',
  email: ''
};

const store = combineForms({
  user: initialState
});

export default store;
// export default function (state = initialState, action) {
//
//   console.log('reducer was called with state', state, 'and action', action);
//
//   switch (action.type) {
//     case 'CHANGE_VALUE':
//       return Object.assign({}, state, {
//         ...state,
//         value: action.value
//
//       });
//     default:
//       return state;
//   }
// }
