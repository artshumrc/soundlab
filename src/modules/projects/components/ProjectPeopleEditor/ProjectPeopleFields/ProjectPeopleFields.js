import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProjectPeopleField from '../ProjectPeopleField';
import NoResults from '../../../../../components/pagination/NoResults';


import './ProjectPeopleFields.css';


const ProjectPeopleFields = ({ fields, users }) => {

	return (
		<div className="projectPeople">
			<div className="projectPeopleLabels">
				<Row>
					<Col md={5}>
						<label>User</label>
					</Col>
					<Col md={3}>
						<label>Role</label>
					</Col>
					<Col md={3}>
						<label>Status</label>
					</Col>
					<Col md={1} />
				</Row>
			</div>
			{fields.map((field, index) => {
				let role = '';

				if (users) {
					users.forEach((user, i) => {
						if (index === i) {
							role = user.role;
						}
					});
				}

				return (
					<ProjectPeopleField
						key={field}
						field={field}
						index={index}
						role={role}
						handleRemove={() => fields.remove(index)}
					/>
				)
			})}

			{!fields.length ?
				<div className="projectPeopleNoResults">
					<NoResults
						message="No users are associated with this project."
					/>
				</div>
			: ''}

			<button
				className="projectEditorButton projectPeopleAdd"
				onClick={() => fields.push({})}
			>
				<i className="mdi mdi-plus" />
				Invite project member
			</button>
		</div>
	);
}

export default ProjectPeopleFields;
