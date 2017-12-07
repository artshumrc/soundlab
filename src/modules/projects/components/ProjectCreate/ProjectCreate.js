import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

import ProjectNameAvailabilityCheckContainer from '../../containers/ProjectNameAvailabilityCheckContainer';

import './ProjectCreate.css';


const ProjectCreate = props => (
	<div className="projectCreate">
		<h1>Create a new project</h1>

		<hr />

		<ProjectNameAvailabilityCheckContainer
			params={{
				slug: props.projectSlug
			}}
			verifyCaptcha={props.verifyCaptcha}
		/>
	</div>
);


export default ProjectCreate;
