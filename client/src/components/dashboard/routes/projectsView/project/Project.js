import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
	<div />
);

Project.propTypes = {
	project: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
	}).isRequired
};
