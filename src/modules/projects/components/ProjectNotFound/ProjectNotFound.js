import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProjectHeader from '../../components/ProjectHeader';
import ProjectFooter from '../../components/ProjectFooter';


import './ProjectNotFound.css';



const ProjectNotFound = props => (
	<div className="projectNotFound">
		<ProjectHeader />
		<Grid>
			<Row>
				<Col>
					<h1>
						This project was not found.
					</h1>
					<p>
						Head <a href="//orphe.us">back home.</a>
					</p>
				</Col>
			</Row>
		</Grid>
		<ProjectFooter />
	</div>
);

export default ProjectNotFound;
