import check from 'check-type';

// models
import Project from '../models/project';
import User from '../models/user';
import Collection from '../models/collection';

// api
import ProjectDetail from './projectDetail';
import Tenant from './tenant';


const _getUser = async (_id) => {
	try {
		const user = User.findById(_id);
		if (user) return user;
		throw new Error(`user with id ${_id} not found`);
	} catch (err) {
		throw err;
	}
};

const _getUserByName = async (username) => {
	try {
		const user = User.find({ username });
		if (user) return user;
		throw new Error(`user with username ${username} not found`);
	} catch (err) {
		throw err;
	}
};


/**
 * API project class. This is the main class
 * to be used to perform operations on the projects and related elements.
 */
export default class ProjectClass {

	/**
	 * ProjectClass constructor - initiate members
	 */
	constructor() {
		/**
		 * Project object from database
		 * @type {Object}
		 * @private
		 */
		this.project = null;
		
		/**
		 * User who created the instance of the Project - owner of the project.
		 * @type {Object}
		 * @private
		 */
		this.owner = null;

		/**
		 * Array of users having any access level to this project.
		 * @type {Array}
		 * @private
		 */
		this.users = [];

		/**
		 * Array of tenants pointing at this project.
		 * @type {Array}
		 * @private
		 */
		this.tenants = [];

		/**
		 * Array of project details describing this project.
		 * @type {Array}
		 * @private
		 */
		this.projectDetails = [];

		/**
		 * [Array of collections related to this project.
		 * @type {Array}
		 * @private
		 */
		this.collections = [];
	}

	async _createProject(languages) {
		try {
			const projectParams = {
				users: [{
					userId: this.owner._id,
					role: 'Owner',
				}],
				languages,
			};

			this.project = await new Project(projectParams).save();
			return true;

		} catch (err) {
			throw err;
		}
	}

	async _createProjectDetail(title, language) {

		try {
			this.projectDetails.push(await new ProjectDetail().create(this.project._id, title));
			return true;

		} catch (err) {
			throw err;
		}
	}

	async _setProject(_id) {
		check.assert.string(_id);
		try {
			this.project = await Project.findById(_id);
			return true;
		} catch (err) {
			throw err;
		}
	}

	_checkProject() {
		if (this.project) return true;
		throw new Error('Project not set.');
	}

	_getUserRole(userId) {
		try {
			_checkProject();
			const projectUser = this.project.users.find(user => user.userId === userId);
			if (projectUser) return projectUser.role;
			return null;
		} catch (err) {
			throw err;
		}
	}

	_userIsOwner(userId) {
		try {
			const role = this._getUserRole(userId);
			if (role === 'Owner') return true;
			return false;
		} catch (err) {
			throw err;
		}
	}

	async _setOwner(username) {
		try {
			_checkProject();
			const user = await _getUserByName(username);

			if (this._userIsOwner(user._id)) this.owner = user;
			return true;
		} catch (err) {
			throw err;
		}
	}

	async _setUsers() {
		try {
			_checkProject();
			this.users = await this.project.users.map(async projektUser => ({
				user: await User.findById(projektUser.user_id),
				role: projektUser.role,
			}));
			return true;
		} catch (err) {
			throw err;
		}
	}

	async _setTenant() {
		try {
			_checkProject();
			this.tenants = await new Tenant().init(this.project._id);
			return true;
		} catch (err) {
			throw err;
		}
	}

	async _setProjectDetails() {
		try {
			_checkProject();
			this.projectDetails = await new ProjectDetail().init(this.project._id);
			return true;
		} catch (err) {
			throw err;
		}
	}

	async _setCollections() {
		try {
			_checkProject();
			this.collections = await Collection.find({ projectId: this.project._id });
			return true;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Initiate the Project object
	 * @param  {!String} username  	Owner of the project
	 * @param  {!String} projectId 	Project id
	 * @return {ProjectClass}     	Instance of the project class (this)
	 */
	async init(username, projectId) {

		check.assert.string(username);
		if (!username) throw new Error('Username not provided');
		check.assert.string(projectId);
		if (!projectId) throw new Error('Project id not provided');

		try {
			await this._setProject(projectId);
			await this._setOwner(username);
			await this._setUsers();
			await this._setTenant();
			await this._setProjectDetails();
			await this._setCollections();

			return this;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	/**
	 * Create new project
	 * @param  {!String} title 		Title of the new project
	 * @return {ProjectClass}       Instance of the project class (this)
	 */
	async create(title) {

		// check if method can run
		check.assert.string(title);
		if (this.project) throw new Error('Project already set');
		if (this.projectDetails.length) throw new Error('Project detail already set');
		if (!this.owner) throw new Error('Owner not set - run init method');

		try {
			this._createProject();

			try {
				this._createProjectDetail(title);
			} catch (err) {
				// if project detail insert fails - remove created project
				await new Project().remove({ _id: this.project._id });
				console.error(err);
				throw err;
			}

			return this;

		} catch (err) {
			throw err;
		}
	}

	async remove() {
		// TODO
	}

	/**
	 * Add a user to the project
	 * @param {!String} userId 				Id of the user
	 * @param {String} [role=Owner] role   	Role of the user
	 * @return {ProjectClass}       Instance of the project class (this)
	 */
	async addUser(userId, role = 'Owner') {
		try {
			_checkProject();
			const user = await _getUser(userId);

			await Project.update({ _id: this.project._id }, { $push: { users: { userId, role} } });

			// update this
			await _setProject(this.project._id);
			await _setUsers();
			return true;

		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async removeUser(userId) {
		// TODO
	}

	/**
	 * Change a users role
	 * @param {!String} userId  		Id of the user
	 * @param {!String} newRole 	The new role
	 * @return {ProjectClass}       Instance of the project class (this)
	 */
	async setUserRole(userId, newRole) {
		try {
			_checkProject();

			const projectUser = this.users.find(projUser => projectUser.user._id === userId);

			if (projectUser) {
				await Project.update({
					_id: this.project._id,
					'users.userId': userId,
				}, {
					$set: {
						'users.$.role': newRole,
					}
				});

				// update this
				await _setProject(this.project._id);
				await _setUsers();
				return true;
			}
			throw new Error(`User with id ${userId} is not connected with this project`);

		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async addTenant(name) { /* TODO */ }

	async removeTenant(tenantId) { /* TODO */ }

	/**
	 * [getProjectDetail description]
	 * @param  {String} [role=DEFAULT_LANGUAGE] language 	Language of the project detail
	 * @return {ProjectDetail}          					ProjectDetail object instance
	 */
	getProjectDetail(language = process.env.DEFAULT_LANGUAGE) {
		if (this.projectDetails.length) return this.projectDetails.find(projDetail => projDetail.language === language);
		throw new Error('Project Details not set');
	}

	/**
	 * Get the mongodb raw document of the project
	 * @return {Object} 	Mongodb project raw document
	 */
	get project() {
		return this.project;
	}
}
