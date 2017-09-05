import React from 'react';
import PropTypes from 'prop-types';

import './Project.css';

class Project extends React.Component {
	render() {
		const { projectData } = this.props;
		return (
			<div className="project">
				<h1>
					{projectData.title}
				</h1>
				<h2>
					{projectData.description}
				</h2>
				<h3>
					{projectData.createdAt}
				</h3>
			</div>
		);
	}
}
export default Project;
