import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectEditor from '../../components/ProjectEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import projectDetailQuery from '../../graphql/queries/detail';
import projectUpdateMutation from '../../graphql/mutations/update';
import projectRemoveMutation from '../../graphql/mutations/remove';


class _ProjectEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { projectUpdate, router } = this.props;
		delete values.__typename;
		projectUpdate(values)
			.then((response) => {
				router.replace(`/dashboard/`);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleRemove(projectId) {
		const { projectRemove, router } = this.props;

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

const _ProjectEditorContainerWithQuery =  compose(
	projectUpdateMutation, projectRemoveMutation, projectDetailQuery,
)(_ProjectEditorContainer);


const ProjectEditorContainer = () => {
	const hostname = getCurrentProjectHostname();
	return (
		<_ProjectEditorContainerWithQuery
			params={{
				hostname,
			}}
		/>
	);
}

export default ProjectEditorContainer;
