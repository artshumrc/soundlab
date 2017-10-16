import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './ProjectVisit.css';

export default class ProjectVisit extends React.Component {

	render() {
		return (
			<section id="visit">
				<h3>Visit</h3>
				<Grid>
					<Row>
						<Col lg={9}>
							<p>Quid faciat laetas segets quo sidere terram vertere mycenas ulmisque adiungere vites conveniat</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
