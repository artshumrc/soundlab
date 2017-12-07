import React from 'react';
import Recaptcha from 'react-recaptcha';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import Button from '../../../../components/common/buttons/Button';

import './ProjectNameAvailabilityCheck.css';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength200 = maxLength(200)


const ProjectNameAvailabilityCheck = props => (

	<div className="projectNameAvailabilityCheck">

		<form
			className="projectNameAvailabilityForm"
			onSubmit={props.handleSubmit}
		>
			<div className="projectNameAvailabilityFormInputOuter projectNameAvailabilityFormTitleOuter">
				<label>What is your Organization's or Project's title?</label>
				<Field
					name="title"
					type="text"
					component="input"
					placeholder="Your Example Organization or Project"
					validate={[required, maxLength200]}
				/>
				<span
					className="projectNameAvailabilityFormHelp"
				>
					?
				</span>
			</div>

			<div className="projectNameAvailabilityFormInputOuter projectNameAvailabilityFormURLOuter">
				<label>At what URL would you like users to access your project?</label>
				<Field
					name="slug"
					type="text"
					component="input"
					placeholder="example"
					validate={[required, maxLength200]}
				/>
				<div className="projectNameAvailabilityFormURL">
					<span>
						.orphe.us
					</span>
				</div>
				<span
					className="projectNameAvailabilityFormHelp"
				>
					?
				</span>
			</div>


			<div className="projectCreateCaptcha">
				<Recaptcha
			    sitekey="6LcfAzwUAAAAAGE3A1yY_IAKDxaskRVuSiman8OS"
			    verifyCallback={props.verifyCaptcha}
			  />
			</div>

			<Button
				transparentLight
				outline
				onClick={props.onSubmit}
			>
				Create
			</Button>

		</form>
	</div>
);

export default reduxForm({
	form: 'ProjectNameAvailabilityCheck',
})(ProjectNameAvailabilityCheck);
