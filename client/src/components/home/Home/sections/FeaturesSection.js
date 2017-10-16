import React from 'react';
import './FeaturesSection.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class FeaturesSection extends React.Component {

	render() {
		return (
			<section id="features">
				<Grid>
					<Row>
						<Col md={4}>
							<div className="feature">
								<Image src="/images/book.png" />
								<div className="feature-title">
									<i className="mdi mdi-view-quilt" />
									<h4>Digital Collections</h4>
								</div>
								<hr />
								<p>Manage multimedia data records and publish articles related to your items</p>
							</div>
						</Col>
						<Col md={4}>
							<div className="feature">
								<Image src="/images/bulb.png" />
								<div className="feature-title">
									<i className="mdi mdi-link" />
									<h4>Linked Data</h4>
								</div>
								<hr />
								<p>Leverage existing ontologies and create your own schemata for your item records</p>
							</div>
						</Col>
						<Col md={4}>
							<div className="feature">
								<Image src="/images/notes.png" />
								<div className="feature-title">
									<i className="mdi mdi-laptop-chromebook" />
									<h4>Cross-platform Access</h4>
								</div>
								<hr />
								<p>
									Access your data on web, mobile, and in augmented and virtual reality
								</p>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
