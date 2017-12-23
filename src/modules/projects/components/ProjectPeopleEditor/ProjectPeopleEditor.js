import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'underscore';

import DashboardNav from '../../../dashboard/components/DashboardNav';
import ProjectPerson from '../ProjectPerson';
import { required, maxLength } from '../../../../lib/formHelpers';


import './ProjectPeopleEditor.css';


const maxLength200 = maxLength(200);
const maxLength2100 = maxLength(2100);


class ProjectPeopleEditor extends React.Component {
	componentWillReceiveProps (nextProps) {
		if (
				nextProps.project
			&& !this.props.project
		) {
			this.props.destroy();
			let hostname = '';

			if (nextProps.project.hostname) {
				hostname = nextProps.project.hostname.replace('.orphe.us', '');
			}

			this.props.initialize({ ...nextProps.project, hostname });
		}
	}

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
