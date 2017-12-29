import React from 'react';
import { compose } from 'react-apollo';

import ProjectHeader from '../../components/ProjectHeader';
import projectQuery from '../../graphql/queries/detail';



const ProjectHeaderContainer = props => {
	let project = null;

	if (props.projectQuery) {
		project = props.projectQuery.project;
	}

	return (
		<ProjectHeader
			project={project}
		/>
	);
};

export default compose(
	projectQuery,
)(ProjectHeaderContainer);
