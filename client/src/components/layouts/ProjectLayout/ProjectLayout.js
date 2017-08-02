import React from 'react';
import './MainLayout.css';
import ProjectHeader from '../../navigation/ProjectHeader';
import ProjectFooter from '../../navigation/ProjectFooter';

const ProjectLayout = props (
	<div>
		<Header />
		{props.children}
		<Footer />
	</div>
);

export default ProjectLayout;
