import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

// types
import ProjectDetailType from '../types/models/project';

// inputs
import ProjectDetailInputType from '../types/inputs/projectDetail';

// models
import Project from '../../models/project';
import ProjectDetail from '../../models/projectDetail';

// errors
import { AuthenticationError } from '../../errors';

const projectDetailMutationFileds = {

	projectSetDetail: {
		type: ProjectDetailType,
		description: 'Create new project',
		args: {
			projectId: {
				type: new GraphQLNonNull(GraphQLID),
			},
			projectInput: {
				type: new GraphQLNonNull(ProjectDetailInputType),
			},
		},
		async resolve(parent, { projectInput, projectId }, { user, tenant }) {

			// only a project owner and from the admin page can set projectDetail
			if (await Project.isOwner(projectId, user._id) && tenant.adminPage) {
				return ProjectDetail.setProjectDetail(projectId, projectInput);
			}
			throw AuthenticationError();
		}
	}
};

export default projectDetailMutationFileds;
