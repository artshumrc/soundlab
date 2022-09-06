import Cookies from 'universal-cookie';

const cookies = new Cookies();


const userLoggedIn = () => {
	const token = cookies.get('token');

	if (token) return true;
	return false;
};

const login = async (data) => {
	if (userLoggedIn()) return null;

	try {
		const res = await fetch(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_LOGIN_URI}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...data
			})
		});
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		const resJson = await res.json();
		if (resJson.token) {
			cookies.set('token', resJson.token);
			return resJson;
		}
	} catch (err) {
		throw err;
	}
};

const logoutMethod = async () => {
	cookies.remove('token');
	cookies.remove('hello');
};

const register = async (data) => {
	if (userLoggedIn()) return null;

	try {
		const res = await fetch(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_REGISTER_URI}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...data
			})
		});
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		const resJson = await res.json();
		if (resJson.token) {
			// TODO: Add domain: 'orphe.us' options to cookie for cross subdomain auth
			cookies.set('token', resJson.token);
			return resJson;
		}
		if (resJson.passwordStrength) {
			throw {
				passwordError: true,
				suggestion: resJson.passwordStrength.feedback.suggestions[0],
			};
		}
	} catch (err) {
		throw err;
	}
};

const verifyToken = async () => {
	const token = cookies.get('token');

	if (!token) {
		return null;
	}

	let ADMIN_URL = process.env.REACT_APP_ADMIN_URL || 'http://soundlab.fas.harvard.edu';
	const res = await fetch(`${ADMIN_URL}/wp-json/jwt-auth/v1/token/validate`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		}
	});

	if (!res.ok) {
		return null;
	}

	return res.json();
};

export { login, logoutMethod, register, verifyToken };
