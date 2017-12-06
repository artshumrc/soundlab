import { gql, graphql } from 'react-apollo';

const projectUpdate = gql`
	mutation projectUpdate($id: String! $project: projectInputType!) {
	projectUpdate(id: $id, project: $project) {
		_id
	}
}
`;

const projectUpdateMutation = graphql(projectUpdate, {
	props: params => ({
		projectUpdate: (id, project) => params.projectUpdateMutation({
			variables: {
				id,
				project,
			},
		}),
	}),
	name: 'projectUpdateMutation',
	options: {
		refetchQueries: ['projectsQuery'],
	},
});


export {
	projectUpdateMutation,
};
