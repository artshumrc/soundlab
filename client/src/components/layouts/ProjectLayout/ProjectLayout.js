import React from 'react';
import './ProjectLayout.css';
import ProjectHeader from '../../navigation/ProjectHeader';
import ProjectFooter from '../../navigation/ProjectFooter';

const ProjectLayout = props => (
	<div>
		<ProjectHeader />
		{props.children}
		<ProjectFooter />
	</div>
);

export default ProjectLayout;
