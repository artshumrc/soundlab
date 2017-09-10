import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

// types
import ProjectType, { ProjectInputType } from '../types/models/project';
import { RemoveType } from '../types';

// models
import Project from '../../models/project';


const projectMutationFields = {
	projectCreate: {
		type: ProjectType,
		description: 'Create a new project',
		args: {
			project: {
				type: new GraphQLNonNull(ProjectInputType)
			}
		},
		async resolve(parent, { project }, { user, tenant }) {

			// Validate resolver-specifc arguments
			// if (!project.collectionId) throw new ArgumentError({ data: { field: 'project.collectionId' } });

			// Initiate new project
			const NewProject = new Project(project);

			const projectUser = {
				userId: user._id,
				role: 'admin'
			};

			NewProject.users.push(projectUser);

			// Validte permissions
			// check user permissions
			try {
				const userIsAdmin = await NewItem.validateUser(user._id);
				// if (!userIsAdmin) throw new PermissionError();
			} catch (err) {
				// throw new PermissionError();
			}

			return NewProject.save();
		}
	},
	projectUpdate: {
		type: ProjectType,
		description: 'Update project',
		args: {
			project: {
				type: new GraphQLNonNull(ProjectInputType),
			},
			projectId: {
				type: new GraphQLNonNull(GraphQLID),
			}
		},
		async resolve(parent, { project, projectId }, { user, tenant }) {

			// Validate connection
			// if operation doesn't come from the admin page
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();

			// Initiate project
			const FoundProject = await Project.findById(projectId);
			if (!FoundProject) throw new ArgumentError({ data: { field: 'projectId' } });

			// validate permissions
			try {
				const userIsAdmin = await FoundProject.validateUser(user._id);
				if (!userIsAdmin) throw new PermissionsError();
			} catch (err) {
				throw new PermissionError();
			}

			// Perform action
			// update project
			Object.keys(item).forEach((key) => {
				FoundProject[key] = item[key];
			});

			// Save new project
			try {
				return await FoundProject.save();
			} catch (err) {
				handleMongooseError(err);
			}
		}
	},

	projectRemove: {
		type: RemoveType,
		description: 'Remove project',
		args: {
			projectId: {
				type: new GraphQLNonNull(GraphQLID),
			}
		},
		async resolve (parent, { projectId }, { user, tenant }) {
			// validate connection
			// if operation doesn't come from the admin page
			// if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();

			// initiate project
			const FoundProject = await Project.findById(projectId);
			if (!FoundProject) throw new ArgumentError({ data: { field: 'projectId' } });

			// validate permissions
			// try {
			// 	const userIsAdmin = await FoundProject.validateUser(user._id);
			// 	if (!userIsAdmin) throw new PermissionError();
			// } catch (err) {
			// 	throw new PermissionError();
			// }

			// perform action
			// save new project
			try {
				await FoundProject.remove();
				return {
					_id: projectId,
				};
			} catch (err) {
				handleMongooseError(err);
			}
		}
	}
};

export default projectMutationFields;
