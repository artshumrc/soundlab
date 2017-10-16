import React from 'react';

import ProjectHeader from '../../components/ProjectHeader';
import ProjectFooter from '../../components/ProjectFooter';

import './ProjectLayout.css';

const ProjectLayout = props => (
	<div>
		<ProjectHeader />
		{props.children}
		<ProjectFooter />
	</div>
);

export default ProjectLayout;
