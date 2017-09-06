import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

// types
import ProjectType, { ProjectCreateInputType, ProjectUpdateInputType } from '../types/models/project';
import { RemoveType } from '../types';

// models
import Project from '../../models/project';

// errors
import { AuthenticationError } from '../errors';

// TODO: Creat ProjectUpdateInputType

const projectMutationFileds = {

	projectCreate: {
		type: ProjectType,
		description: 'Create new project',
		args: {
			project: {
				type: new GraphQLNonNull(ProjectCreateInputType)
			}
		},
		async resolve(parent, { project }, { user, tenant }) {
			// Validate connection
			// if the operation doesn't come from the admin page:
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in:
			if (!user) throw new AuthenticationError();

			// Validate resolver-specifc arguments
			if (!project.collectionId) throw new ArgumentError({ data: { field: 'project.collectionId' } });

			// Initiate new project
			const NewProject = new Project(project);

			// Validte permissions
			// check user permissions
			try {
				const userIsOwner = await NewItem.validateUser(user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw new PermissionError();
			}
		}
	},
	projectUpdate: {
		type: ProjectType,
		description: 'Update project',
		args: {
			project: {
				type: new GraphQLNonNull(ProjectUpdateInputType),
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
				const userIsOwner = await FoundProject.validateUser(user._id);
				if (!userIsOwner) throw new PermissionsError();
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
			if (!tenant.adminPage) throw new TenantError();

			// if user is not logged in
			if (!user) throw new AuthenticationError();

			// initiate project
			const FoundProject = await Project.findById(projectId);
			if (!FoundProject) throw new ArgumentError({ data: { field: 'projectId' } });

			// validate permissions
			try {
				const userIsOwner = await FoundProject.validateUser(user._id);
				if (!userIsOwner) throw new PermissionError();
			} catch (err) {
				throw new PermissionError();
			}

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

export default projectMutationFileds;
