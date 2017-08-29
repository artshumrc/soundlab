import React from 'react';
import { Button } from 'react-bootstrap';
import ProjectsEditor from '../components/ProjectsEditor';

// TODO: Add projects view
// TODO: Add new projects
// TODO: Edit projects
// TODO: Remove projects


class userProjects extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div>
					<h3 style={{color: 'black'}}>Your projects: </h3>
				</div>
				<Button bsStyle="primary">Add a project!</Button>
				<ProjectsEditor />
			</div>
		);
	}
}

export default userProjects;
