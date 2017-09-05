import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

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
										<Project
											projectData={data.userProjects}
										/>
									</div>
									:
									<div className="loading">
										<h1>You do not have any projects.</h1>
									</div>
								}
							</div>
						</div>
					:
						<div>
							<h2>loading</h2>
						</div>
				}
			</div>
		);
	}
}

ProjectsView.propTypes = {
	data: PropTypes.shape({
		userProjects: PropTypes.arrayOf(PropTypes.object)
	}).isRequired
};

ProjectsView.defaultProps = {
	data: {}
};

// userId: "59a86618a93a2c37840d4b38"

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
