import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './ProjectHelp.css';

const ProjectHelp = () => (
	<div className="projectHelp">
		<Grid>
			<Row>
				<Col>
					<h1>
						Support
					</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="contactSupport" />
				</Col>
			</Row>
		</Grid>

	</div>
);

export default ProjectHelp;
