import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import './ProjectView.css';

import Project from './project';

class ProjectsView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentWillReceiveProps(nextProps) {
		const { loading } = this.state;
		if (nextProps.data.loading !== loading) {
			this.setState({
				loading: !loading
			});
		}
	}

	render() {
		const { data } = this.props;
		console.log('user projects: ', data.userProjects);
		return (
			<div>
				{
					!data.loading ?
						<div>
							<div className="topBar">
								<span className="title">My Projects</span>
							</div>
							<div>
								{ data.userProjects ?
									<div>
										{
											data.userProjects.map(project => (
												<Project
													projectData={project} 
												/>
											))
										}
									</div>
									:
									<div>
										<h1>You do not have any projects.</h1>
									</div>
								}
							</div>
						</div>
					:
						<div className="loading">
							<h2>loading</h2>
						</div>
				}
			</div>
		);
	}
}

ProjectsView.propTypes = {
	data: PropTypes.shape({
		userProjects: PropTypes.arrayOf(PropTypes.object),
		loading: PropTypes.bool
	}).isRequired
};

const userProjects = gql`
query {
  userProjects {
    title,
    description,
    createdAt
  }
}
`;

export default graphql(userProjects)(ProjectsView);
