import React from 'react';
import { reduxForm } from 'redux-form';

import DashboardNav from '../../../dashboard/components/DashboardNav';
import ProjectPerson from '../ProjectPerson';


import './ProjectPeopleEditor.css';



class ProjectPeopleEditor extends React.Component {

	render() {
		const { project } = this.props;

		if (!project) {
			return null;
		}

		return (
			<div className="projectEditor">
				<DashboardNav />

				<h1>Project Members</h1>

				<form
					className="projectEditorForm"
					onSubmit={this.props.handleSubmit}
				>

					{project.users.map((user, i) => (
						<div
							key={user._id}
							className="projectEditorFormInputOuter"
						>
							<ProjectPerson {...user} />

							<div className="role">
								<label>Role</label>

							</div>

							<span
								className="projectEditorFormHelp"
							>
								?
							</span>
						</div>
					))}

					<div
						className="projectEditorFormInputOuter"
					>
						<button>
							Add new project member
						</button>
					</div>

					<button
						type="submit"
						className="projectEditorButton"
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'ProjectPeopleEditor',
})(ProjectPeopleEditor);
