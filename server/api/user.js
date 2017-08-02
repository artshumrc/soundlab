import mongoose from 'mongoose';
import check from 'check-types'

// models
import User from '../models/user';

// api
import { getAllUserProjects } from './project';


export default class UserClass {

	constructor(username) {
		if (username) check.assert.string(username);
		this._username = username;
	}

	async _userDoc() {
		if (!this._username) return null;

		try {
			const user = await User.findByUsername(this._username);
			if (user && user.length) return user;
			throw new Error('User not found');
		} catch (err) {
			throw err;
		}
	}

	async _id() {
		if (!this._username) return null;

		try {
			const user = await this._userDoc();
			return user._id;
		} catch (err) {
			throw err;
		}
	}

	async _projects() {
		if (!this._username) return null;

		try {
			const projects = await getAllUserProjects(await this._id);
			if (projects && projects.length) return projects;
			throw new Error('Projects not found');
		} catch (err) {
			throw err;
		}
	}

	async _project(projectId) {
		if (!this._username) return null;

		try {
			const projects = await this._projects();
			return projects.find(project => project.id === projectId);
		} catch (err) {
			throw err;
		}
	}

	get projects() {
		return this._projects();
	}

	getProject(projectId) {
		if (!mongoose.Types.ObjectId.isValid(projectId)) throw new Error('Incorrect projectId');
		return this._project(projectId);
	}

	async isValid() {
		if (!this._username) return null;

		try {
			const user = await this._userDoc();
			return true;
		} catch (err) {
			if (err.message === 'User not found') return false;
			console.error(err);
			throw err;
		}
	}
}

