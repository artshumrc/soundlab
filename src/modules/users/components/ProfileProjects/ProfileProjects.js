import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProfileNav from '../ProfileNav';

import './ProfileProjects.css';

const ProfileProjects = ({ projects }) => (
	<div className="profileProjects">
		<ProfileNav />
		<Grid>
			<Row>
				<div className="profileProjectList">
					{projects.map(project => (
						<Col md={4}>
							<a
								className="profileProjectListItem"
								href={`//${project.hostname}.orphe.us`}
							>
								{project.title}
							</a>
						</Col>
					))}
				</div>
			</Row>
		</Grid>
	</div>
);


export default ProfileProjects; 
