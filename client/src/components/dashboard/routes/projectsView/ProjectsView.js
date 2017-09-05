import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import Project from './project';

const ProjectsView = ({ data }) => (
	<div>
		<div className="topBar">
			<span className="title">My Projects</span>
		</div>
		<div>
			{ data.userProjects ?
				<p>you have projects!</p>
				:
				<div>
					<p>You do not have any projects.</p>
				</div>
			}
		</div>
	</div>
);

ProjectsView.propTypes = {
	data: PropTypes.shape({
		projects: PropTypes.arrayOf(PropTypes.object)
	}).isRequired
};

ProjectsView.defaultProps = {
	data: {}
};

const userProjects = gql`
query {
  userProjects(userId: "59a86618a93a2c37840d4b38") {
    title,
    description,
    createdAt
  }
}
`;


export default graphql(userProjects)(ProjectsView);
