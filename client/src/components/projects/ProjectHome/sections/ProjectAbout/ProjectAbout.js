import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './ProjectAbout.css';

export default class ProjectAbout extends React.Component {

	render() {
		return (
			<section id="about">
				<h3>About</h3>
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
