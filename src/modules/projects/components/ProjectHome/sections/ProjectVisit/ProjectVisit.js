import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactMapboxGl from 'react-mapbox-gl';


import './ProjectVisit.css';

export default class ProjectVisit extends React.Component {

	render() {
		const Map = ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibHVrZWhvbGxpcyIsImEiOiJ6Rk1vdjc0In0.jQDtXA8wqU_wYi5p1ClCyw',
			scrollZoom: false,
		});

		return (
			<section id="visit">
				<Row>
					<Col
						md={5}
						className="projectVisitCol"
					>
						<Map
						  style="mapbox://styles/lukehollis/cj7dnh4fb11452smw1dj34x04" // eslint-disable-line
							containerStyle={{
								height: '100vh',
								width: '100%'
							}}
							center={[
								-71.1139213, 42.3741574
							]}
							zoom={[13]}
						/>
					</Col>
					<Col
						md={7}
						className="projectVisitCol"
					>
						<div className="projectVisitInfo">
							<h2>Plan your visit</h2>
							<hr />
							<p>
								Example Project Gallery
							</p>
							<p>
								10 Ware Street, Cambridge, MA 02138
							</p>
							<p>
								857.600.2681
							</p>
							<p>
								<a href="https://archimedes.digital" target="_blank" rel="noopener noreferrer">
									https://archimedes.digital/
								</a>
							</p>
						</div>
					</Col>
				</Row>
			</section>
		);
	}
}
