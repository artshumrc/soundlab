import React from 'react';

import ProjectHeader from '../../components/ProjectHeader';
import ProjectFooter from '../../components/ProjectFooter';

import ProjectAbout from './sections/ProjectAbout';
import ProjectCollections from './sections/ProjectCollections';
import ProjectCover from './sections/ProjectCover';
import ProjectFeatured from './sections/ProjectFeatured';
import ProjectPeople from './sections/ProjectPeople';
import ProjectVisit from './sections/ProjectVisit';

import './ProjectHome.css';
import '../../../home/components/Home/Home.css';

class ProjectHome extends React.Component {
	render() {
		const visitEnabled = true;
		return (
			<div id="home">
				<ProjectHeader />
				<ProjectCover />
				<ProjectFeatured />
				<ProjectAbout />
				<ProjectCollections />
				<ProjectPeople />
				{
					visitEnabled &&
					<ProjectVisit />
				}
				<ProjectFooter />
			</div>
		);
	}
}

export default ProjectHome;
