import React from 'react';
import './ProjectPerson.css';
import Avatar from '../../users/Avatar';

const ProjectPerson = props => (
	<div className="projectPerson">
		<Avatar
			alt={props.name}
			src={props.imageName}
		/>
		<h4 className="projectPersonName">{props.name}</h4>
		<hr />
		<p>{props.role}</p>
	</div>
);

export default ProjectPerson;
