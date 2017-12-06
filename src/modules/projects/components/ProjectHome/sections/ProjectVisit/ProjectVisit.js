import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';


import './ProjectVisit.css';

export default class ProjectVisit extends React.Component {

	render() {
		return (
			<section id="visit">
				<Grid>
					<Row>
						<Col md={5}>
							<ReactMapGL
							  width={400}
							  height={400}
							  latitude={42.3741574}
							  longitude={-71.1139213}
							  zoom={8}
							  onViewportChange={(viewport) => {
							    const {width, height, latitude, longitude, zoom} = viewport;
							    // Optionally call `setState` and use the state to update the map.
							  }}
							/>
						</Col>
						<Col md={7}>
							<p>Quid faciat laetas segets quo sidere terram vertere mycenas ulmisque adiungere vites conveniat</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
