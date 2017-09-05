import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText, FlatButton, MuiThemeProvider } from 'material-ui'; 

import './Project.css';

class Project extends React.Component {
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
							<FlatButton label="Remove" />
							<FlatButton label="Edit" />
						</CardActions>
					</Card>
				</div>
			</MuiThemeProvider>
		);
	}
}
export default Project;
