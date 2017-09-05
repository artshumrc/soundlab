import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import Project from './project';

// class ProjectsView extends React.Component {
// 	componentWillRecieveProps(nextProps) {
// 		if (this.props !== nextProps) {
// 			console.log()
// 		}
// 	}
// 	render() {
// 		const { data } = this.props;
// 		return (
// 			<div>
// 				<div className="topBar">
// 					<span className="title">My Projects</span>
// 				</div>
// 				<div>
// 					{ data.userProjects ?
// 						<div>
// 							<Project
// 								title={data.userProjects.title}
// 								description={data.userProjects.description}
// 								createdAt={data.userProjects.createdAt} 
// 							/>
// 						</div>
// 						:
// 						<div>
// 							<h1>You do not have any projects.</h1>
// 						</div>
// 					}
// 				</div>
// 			</div>
// 		);
// 	}
// }




const ProjectsView = ({ data }) => (
	<div>
		<div className="topBar">
			<span className="title">My Projects</span>
		</div>
		<div>
			{ data.userProjects ?
				<div>
					<Project
						title={data.userProjects.title}
						description={data.userProjects.description}
						createdAt={data.userProjects.createdAt} 
					/>
				</div>
				:
				<div>
					<h1>You do not have any projects.</h1>
				</div>
			}
		</div>
	</div>
);

ProjectsView.propTypes = {
	data: PropTypes.shape({
		userProjects: PropTypes.arrayOf(PropTypes.object)
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
