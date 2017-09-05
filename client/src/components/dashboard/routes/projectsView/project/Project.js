import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, description, createdAt }) => (
	<div>
		<div>
			<h2>{{ title }}</h2>
		</div>
		<div>
			<h3>{{ description }}</h3>
		</div>
		<div>
			<h4>{{ createdAt }}</h4>
		</div>
	</div>
);

Project.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	createdAt: PropTypes.instanceOf(Date).isRequired
};

Project.defaultProps = {
	description: ''
};

export default Project;
