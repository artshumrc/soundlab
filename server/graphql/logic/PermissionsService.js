import Project from '../../models/project';

export default class PermissionsService {
	constructor(props) {
		this.user = props.user ? props.user : null;
		this.project = props.project ? props.project : null;

		console.log("Permissions Service user and project", user, project);
		this.userRolesForProject = [];
	}
}
