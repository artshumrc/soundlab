import * as types from '../actions/auth';

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
		if (state.showAuthModal) {
			return {
				...state,
				authMode: initialState.authMode,
				showAuthModal: !state.showAuthModal,
			};
		}
		return {
			...state,
			showAuthModal: !state.showAuthModal,
		};
	}
	default:
		return state;
	}
};
