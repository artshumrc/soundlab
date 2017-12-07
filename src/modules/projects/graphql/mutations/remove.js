import { gql, graphql } from 'react-apollo';


const projectRemove = gql`
	mutation projectRemove($id: String!) {
	projectRemove(id: $id) {
		_id
	}
}
`;

const projectRemoveMutation = graphql(projectRemove, {
	props: params => ({
		projectRemove: id => params.projectRemoveMutation({
			variables: {
				id,
			},
		}),
	}),
	name: 'projectRemoveMutation',
	options: {
		refetchQueries: ['projectsQuery'],
	},
});

export default projectRemoveMutation;
