import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'underscore';

import DashboardNav from '../../../dashboard/components/DashboardNav';
import { required, maxLength } from '../../../../lib/formHelpers';

import './ProjectEditor.css';


const maxLength200 = maxLength(200);
const maxLength2100 = maxLength(2100);


class ProjectEditor extends React.Component {
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
		return (
			<div className="projectEditor">
				<DashboardNav />

				<h1>Project Settings</h1>

				<form
					className="projectEditorForm"
					onSubmit={this.props.handleSubmit}
				>
					<div className="projectEditorFormInputOuter">
						<label>What is your Organization&apos;s or Project&apos;s title?</label>
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

					<div className="projectEditorFormInputOuter">
						<label>Enter a subtitle for your project&apos;s homepage.</label>
						<Field
							name="subtitle"
							type="text"
							component="input"
							placeholder="E.g. 16th and 17th century manuscripts"
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
						<label>Enter an email for users to contact your project or institution.</label>
						<Field
							name="email"
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

					<div className="projectEditorFormInputOuter ">
						<label>Enter the website of the project (if there is one).</label>
						<Field
							name="url"
							type="text"
							component="input"
							placeholder="https://project.example.edu"
							validate={[required, maxLength2100]}
						/>
						<span
							className="projectEditorFormHelp"
						>
							?
						</span>
					</div>


					<div className="projectEditorFormInputOuter ">
						<label>Enter the address of the project (if there is one).</label>
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
						<label>Enter the phone number of the project (if there is one).</label>
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
