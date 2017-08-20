/*
 * action types
 */
export const CHANGE_AUTH_MODE = 'CHANGE_AUTH_MODE';
export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';
export const TOGGLE_LOGOUT = 'TOGGLE_LOGOUT';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = '';


/*
 * action creators
 */
export const changeAuthMode = authMode => ({
	type: CHANGE_AUTH_MODE,
	authMode,
});
export const toggleAuthModal = value => ({
	type: TOGGLE_AUTH_MODAL,
	value
});
export const toggleLogout = value => ({
	type: TOGGLE_LOGOUT,
	value
});
export const setUser = ({ username, userId }) => ({
	type: SET_USER,
	username,
	userId,
});
export const removeUser = () => ({
	type: REMOVE_USER,
});

export const login = (loginMethod, username, password) => async (dispatch) => {
	try {
		const userObj = await loginMethod(username, password);
		dispatch(setUser(userObj));
		dispatch(toggleAuthModal(false));
	} catch (err) {
		throw err;
	}
};

export const logout = (logoutMethod, username, password) => async (dispatch) => {
	try {
		const userObj = await logoutMethod();
		dispatch(removeUser(userObj));
		dispatch(toggleAuthModal(false));
	} catch (err) {
		throw err;
	}
};
