import React from 'react';
import PropTypes from 'prop-types';

import Project from './project';

const ProjectsView = ({ projects }) => (
	<div />
);

ProjectsView.defaultProps = {
	projects: []
};

ProjectsView.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectsView;
