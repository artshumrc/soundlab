import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Project from './project';

const ProjectsView = ({ data }) => (
	<div />
);

ProjectsView.propTypes = {
	data: PropTypes.shape({
		projects: PropTypes.arrayOf(PropTypes.object)
	}).isRequired
};

const queryProjectsByCurrentUser = gql`
query queryProjectsByCurrentUser {
	projects {
		title,
		description
	}
}
`;

export default graphql(queryProjectsByCurrentUser)(ProjectsView);
