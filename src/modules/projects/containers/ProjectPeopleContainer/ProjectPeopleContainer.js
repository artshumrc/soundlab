import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectPeopleEditor from '../../components/ProjectPeopleEditor';
import projectDetailQuery from '../../graphql/queries/detail';
import projectUpdateMutation from '../../graphql/mutations/update';
import projectRemoveMutation from '../../graphql/mutations/remove';


class ProjectPeopleContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { projectUpdate, router } = this.props;
		const users = values.users;

		projectUpdate({ users })
			.then((response) => {
				router.replace('/dashboard/');
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
			<ProjectPeopleEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				project={project}
			/>
		);
	}
}

export default compose(
	projectUpdateMutation, projectRemoveMutation, projectDetailQuery,
)(ProjectPeopleContainer);
