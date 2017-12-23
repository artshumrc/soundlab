import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectEditor from '../../components/ProjectEditor';
import projectDetailQuery from '../../graphql/queries/detail';
import projectUpdateMutation from '../../graphql/mutations/update';
import projectRemoveMutation from '../../graphql/mutations/remove';


class ProjectMembersContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { projectUpdate, router } = this.props;
		delete values.__typename;
		projectUpdate(values)
			.then((response) => {
				router.replace('/dashboard/');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleRemove(projectId) {
		const { projectRemove } = this.props;

		projectRemove(projectId)
			.then((response) => {
				window.location = '//orphe.us';
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let project;

		if (this.props.projectQuery && !this.props.projectQuery.loading) {
			project = this.props.projectQuery.project;
		}

		return (
			<ProjectEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				project={project}
			/>
		);
	}
}

export default compose(
	projectUpdateMutation, projectRemoveMutation, projectDetailQuery,
)(ProjectMembersContainer);
