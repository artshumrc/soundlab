import jsonwebtoken from 'jsonwebtoken';

export default class PermissionsService {
	constructor({ token }) {
		this.token = token;
		if (token) {
			const decoded = jsonwebtoken.decode(token);
			this.userId = decoded.user_id;
			this.userName = decoded.name;
			this.userAvatar = decoded.picture;
			this.token = token;
		}
	}
}
