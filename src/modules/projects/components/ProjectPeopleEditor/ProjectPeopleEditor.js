import React from 'react';
import { reduxForm, FieldArray } from 'redux-form';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import DashboardNav from '../../../dashboard/components/DashboardNav';
import ProjectPeopleFields from './ProjectPeopleFields';


import './ProjectPeopleEditor.css';



class ProjectPeopleEditor extends React.Component {

	render() {
		const { users } = this.props;

		return (
			<div className="projectEditor">
				<DashboardNav />

				<h1>People</h1>

				<form
					className="projectEditorForm"
					onSubmit={this.props.handleSubmit}
				>


					<div
						className="projectEditorFormInputOuter"
					>
						<FieldArray
							name="users"
							component={ProjectPeopleFields}
							users={users}
						/>
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

let ProjectPeopleEditorForm = reduxForm({
	form: 'ProjectPeopleEditor',
})(ProjectPeopleEditor);

const selector = formValueSelector('ProjectPeopleEditor') // <-- same as form name

const mapStateToProps = (state, props) => {
	const users = selector(state, 'users')

	return {
		users,
	};
};

ProjectPeopleEditorForm = connect(
	mapStateToProps
)(ProjectPeopleEditorForm);

export default ProjectPeopleEditorForm;
