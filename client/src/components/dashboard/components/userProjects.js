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

		this.state = {
			openAddNewProjectForm: false
		};

		this.toggleAddNewProjectForm = this.toggleAddNewProjectForm.bind(this);
	}

	toggleAddNewProjectForm() {
		const { openAddNewProjectForm } = this.state;

		this.setState({
			openAddNewProjectForm: !openAddNewProjectForm
		});
	}

	render() {
		const { openAddNewProjectForm } = this.state;

		return (
			<div>
				<div>
					<h3 style={{color: 'black'}}>Your projects: </h3>
				</div>
				<Button 
					bsStyle="primary"
					onClick={() => this.toggleAddNewProjectForm}
				>
					Add a project!
				</Button>
				{openAddNewProjectForm ?
					<ProjectsEditor />
					:
					''
				}
			</div>
		);
	}
}

export default userProjects;
