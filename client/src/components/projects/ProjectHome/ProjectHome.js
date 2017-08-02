import React from 'react';
import './ProjectHome.css';
import '../../home/Home/Home.css';
import ProjectHeader from '../../navigation/ProjectHeader';
import ProjectFooter from '../../navigation/ProjectFooter';
import ProjectAbout from './sections/ProjectAbout';
import ProjectCollections from './sections/ProjectCollections';
import ProjectCover from './sections/ProjectCover';
import ProjectFeatured from './sections/ProjectFeatured';
import ProjectPeople from './sections/ProjectPeople';
import ProjectVisit from './sections/ProjectVisit';

class ProjectHome extends React.Component {
	render() {
		const visitEnabled = false;
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
