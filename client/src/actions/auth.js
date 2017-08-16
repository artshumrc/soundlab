/*
 * action types
 */
export const CHANGE_AUTH_MODE = 'CHANGE_AUTH_MODE';
export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';


/*
 * action creators
 */
export const changeAuthMode = authMode => ({
	type: CHANGE_AUTH_MODE,
	authMode,
});
export const toggleAuthModal = () => ({
	type: TOGGLE_AUTH_MODAL,
});
