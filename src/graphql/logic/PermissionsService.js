import jsonwebtoken from 'jsonwebtoken';

export default class PermissionsService {
	constructor({ token }) {
		this.token = token;
		if (token) {
			const decoded = jsonwebtoken.decode(token);
			if (decoded && decoded.data && decoded.data.user && decoded.data.user.id) {
				this.userId = parseInt(decoded.data.user.id, 10);
			}
			this.token = token;
		}
	}
}
