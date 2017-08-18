import * as types from './actions';

const initialState = {
	showAuthModal: false,
	authMode: 'login',
};

export default (state = initialState, action) => {
	switch (action.type) {
	case types.CHANGE_AUTH_MODE: {
		return {
			...state,
			authMode: action.authMode,
		};
	}
	case types.TOGGLE_AUTH_MODAL: {
		// if (state.showAuthModal) {
		// 	return {
		// 		...state,
		// 		authMode: initialState.authMode,
		// 		showAuthModal: typeof action.value !== 'undefined' ? action.value : !state.showAuthModal,
		// 	};
		// }
		// return {
		// 	...state,
		// 	showAuthModal: !state.showAuthModal,
		// };
		return {
			...state,
			authMode: initialState.authMode,
			showAuthModal: typeof action.value !== 'undefined' ? action.value : !state.showAuthModal,
		};
	}
	case types.TOGGLE_LOGOUT: {
		return {
			...state,
			authMode: 'logout',
			showAuthModal: typeof action.value !== 'undefined' ? action.value : !state.showAuthModal,
		};
	}
	case types.SET_USER: {
		return {
			...state,
			username: action.username,
			userId: action.userId,
		};
	}
	case types.REMOVE_USER: {
		return {
			...state,
			username: null,
			userId: null,
		};
	}
	default:
		return state;
	}
};
