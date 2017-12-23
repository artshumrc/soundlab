import React from 'react';
import { Field, reduxForm } from 'redux-form';

import DashboardNav from '../../../dashboard/components/DashboardNav';

import './ProjectEditor.css';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)
const maxLength2100 = maxLength(2100)


class ProjectEditor extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (
			(
				!this.props.project
			&& nextProps.project
			)
			|| this.props.project !== nextProps.project
		) {
      this.props.destroy();
      this.props.initialize({ ...nextProps.project });
    }
  }

	render() {
		return (
			<div className="projectEditor">
				<DashboardNav />

				<h1>Project Settings</h1>

				<form
					className="projectEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="projectEditorFormInputOuter projectEditorFormTitleOuter">
						<label>What is your Organization's or Project's title?</label>
						<Field
							name="title"
							type="text"
							component="input"
							placeholder="Your Organization or Project"
							validate={[required, maxLength200]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="projectEditorFormInputOuter projectEditorFormDescriptionOuter">
						<label>Enter a brief description of your project.</label>
						<Field
							name="description"
							type="text"
							component="textarea"
							placeholder="Example description of project . . . "
							validate={[required, maxLength2100]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>

					<div
						className="
							projectNameAvailabilityFormInputOuter
							projectNameAvailabilityFormURLOuter
							projectNameAvailabilityFormURLOuterDisabled
						"
					>
						<div>
							<label>At what URL would you like users to access your project?</label>
							<Field
								name="hostname"
								type="text"
								component="input"
								placeholder="example"
								validate={[required, maxLength200]}
								disabled
							/>
							<div className="projectNameAvailabilityFormURL">
								<span>
									.orphe.us
								</span>
							</div>
							<span
								className="projectEditorFormHelp"
							>
								?
							</span>
						</div>
						<div>
							<span className="">
								Contact <a href="mailto:support@orphe.us">support</a> to change your project URL.
							</span>
						</div>
					</div>

					<div className="projectEditorFormInputOuter ">
						<label>Address</label>
						<Field
							name="address"
							type="text"
							component="input"
							placeholder="123 Your Street, City, State"
							validate={[required, maxLength2100]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="projectEditorFormInputOuter ">
						<label>Phone number</label>
						<Field
							name="phone"
							type="text"
							component="input"
							placeholder="(###) ###-####"
							validate={[required, maxLength2100]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>

					<div className="projectEditorFormInputOuter ">
						<label>Email</label>
						<Field
							name="phone"
							type="text"
							component="input"
							placeholder="contact@example.edu"
							validate={[required, maxLength2100]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>

					<button
						type="submit"
						className={`
							projectEditorButton
						`}
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'ProjectEditor',
})(ProjectEditor);
