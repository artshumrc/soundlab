import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './ProjectFeatured.css';

export default class ProjectFeatured extends React.Component {

	render() {
		return (
			<section id="featured">
				<Grid>
					<Row>
						<Col lg={4}>
							<Image src="//iiif.orphe.us/orpheus/art/18.jpg/full/320,/0/default.jpg" />
							<h4>Artefact</h4>
							<hr />
							<p>Quid faciat laetas segetes</p>
						</Col>
						<Col lg={4}>
							<Image src="//iiif.orphe.us/orpheus/art/7.jpg/full/320,/0/default.jpg" />
							<h4>Artefact</h4>
							<hr />
							<p>Quid faciat laetas segetes</p>
						</Col>
						<Col lg={4}>
							<Image src="//iiif.orphe.us/orpheus/art/67.jpg/full/320,/0/default.jpg" />
							<h4>Artefact</h4>
							<hr />
							<p>Quid faciat laetas segetes</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
