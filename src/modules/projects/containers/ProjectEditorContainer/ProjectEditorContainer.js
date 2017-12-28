import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectEditor from '../../components/ProjectEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import projectDetailQuery from '../../graphql/queries/detail';
import projectUpdateMutation from '../../graphql/mutations/update';
import projectRemoveMutation from '../../graphql/mutations/remove';


class ProjectEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { projectUpdate, router } = this.props;

		// values from query not to send back to update
		delete values.__typename;
		delete values.userIsAdmin;
		delete values.collections;
		delete values.items;
		delete values.users; // users handled in separate form

		// regularize subdomain to hostname
		values.hostname = `${values.hostname}.orphe.us`;

		projectUpdate(values)
			.then((response) => {
				router.replace('/dashboard/');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	handleRemove(projectId) {
		const { projectRemove } = this.props;

		projectRemove(projectId)
			.then((response) => {
				window.location = '//orphe.us';
			})
			.catch((err) => {
				console.error(err);
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
				initialValues={project}
			/>
		);
	}
}

export default compose(
	projectUpdateMutation, projectRemoveMutation, projectDetailQuery,
)(ProjectEditorContainer);
