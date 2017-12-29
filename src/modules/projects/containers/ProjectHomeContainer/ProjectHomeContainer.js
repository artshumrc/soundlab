import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import ProjectHome from '../../components/ProjectHome';
import ProjectNotFound from '../../components/ProjectNotFound';
import projectQuery from '../../graphql/queries/detail';


const ProjectHomeContainer = props => {
	const { router } = props;
	let project;

	if (!props.projectQuery) {
		// TODO: loading state
		return (
			<div />
		);
	} else {
		project = props.projectQuery.project;
	}


	if (!project) {
		return (
			<ProjectNotFound />
		);
	}

	return (
		<ProjectHome {...project} />
	);
};

export default compose(
	projectQuery,
	withRouter,
)(ProjectHomeContainer);
