import { setLocalStorageItem, removeLocalStorageItem } from './storage';

const userLoggedIn = () => {
	// TODO
};

const login = async (username, password) => {
	if (userLoggedIn()) return null;

	try {
		const res = await fetch(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_LOGIN_URI}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			})
		});
		const resJson = await res.json();
		if (resJson.token) {
			return setLocalStorageItem('token', resJson.token);
		}
	} catch (err) {
		throw err;
	}
};

const logout = async () => removeLocalStorageItem('token');

const register = async (username, password) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_REGISTER_URI}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			})
		});
		const resJson = await res.json();
		if (resJson.token) {
			return setLocalStorageItem('token', resJson.token);
		}
	} catch (err) {
		throw err;
	}
};

export { login, logout, register };
