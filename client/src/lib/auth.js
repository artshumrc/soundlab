import { setLocalStorageItem, removeLocalStorageItem, getLocalStorageItem } from './storage';

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
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		const resJson = await res.json();
		if (resJson.token) {
			setLocalStorageItem('token', resJson.token);
			return resJson;
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
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		const resJson = await res.json();
		if (resJson.token) {
			return setLocalStorageItem('token', resJson.token);
		}
	} catch (err) {
		throw err;
	}
};

const verifyToken = async () => {
	// REACT_APP_VeRIFY_TOKEN_URI
	const token = getLocalStorageItem('token');
	if (token) {
		try {
			const res = await fetch(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_VERIFY_TOKEN_URI}`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'authorization': token,
				}
			});
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		} catch (err) {
			throw err;
		}
	}
	return null;
};

export { login, logout, register, verifyToken };
