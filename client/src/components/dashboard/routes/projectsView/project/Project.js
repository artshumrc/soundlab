import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText, FlatButton, MuiThemeProvider } from 'material-ui';
import { gql, graphql } from 'react-apollo'; 
import autoBind from 'react-autobind';

// import './Project.css';

class Project extends React.Component {
	constructor(props) {
		super(props);

		autoBind(this);
	}

	remove() {
		const { projectData, mutate } = this.props;
		const projectId = projectData._id;
		mutate({
			variables: {
				projectId: projectId
			},
			context: {
				user: ''
			}
		});
	}

	render() {
		const { projectData } = this.props;
		return (
			<MuiThemeProvider>
				<div className="project">
					<Card>
						<CardTitle title={projectData.title} subtitle={projectData.createdAt} />
						<CardText>
							{ projectData.description }
						</CardText>
						<CardActions>
							<FlatButton 
								label="Remove"
								onClick={this.remove()}
							/>
							<FlatButton label="Edit" />
						</CardActions>
					</Card>
				</div>
			</MuiThemeProvider>
		);
	}
}

Project.propTypes = {
	projectData: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		createdAt: PropTypes.string,
		_id: PropTypes.string,
	}).isRequired,
	mutate: PropTypes.func.isRequired
};

const removeProject = gql`
	mutation projectRemove($projectId: ID!) {
		projectRemove(projectId: $projectId) {
			_id,
		}
	}
`;

export default graphql(removeProject)(Project);
