import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, description, createdAt }) => (
	<div>
	</div>
);

Project.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	createdAt: PropTypes.date.isRequired
};

Project.defaultProps = {
	description: ''
};

export default Project;
