import * as types from '../actions/header';

const initialState = {
	showLoginModal: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case types.TOGGLE_LOGIN_MODAL: 
		return {
			...state,
			showLoginModal: !state.showLoginModal,
		};
	default:
		return state;
	}
};
