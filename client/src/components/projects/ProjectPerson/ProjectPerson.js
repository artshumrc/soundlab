import React from 'react';
import './ProjectPerson.css';

const ProjectPerson = props => (
	<div className="projectPerson">
		<img
			className="projectPersonAvatar"
			alt={props.name}
			src={`//iiif.orphe.us/orpheus/${props.imageName}/full/full/0/default.jpg`}
		/>
		<h4>{props.name}</h4>
		<hr />
		<p>{props.role}</p>
	</div>
);

export default ProjectPerson;
