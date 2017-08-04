import React from 'react';
import './FeaturesSection.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class FeaturesSection extends React.Component {

	render() {
		return (
			<section id="features">
				<Grid>
					<Row>
						<Col lg={4}>
							<Image src="/images/book.png" />
							<h4>Digital Collections</h4>
							<hr />
							<p>Manage multimedia data records and publish articles related to your items</p>
						</Col>
						<Col lg={4}>
							<Image src="/images/bulb.png" />
							<h4>Linked Data</h4>
							<hr />
							<p>Leverage existing ontologies and create your own schemata for your item records</p>
						</Col>
						<Col lg={4}>
							<Image src="/images/notes.png" />
							<h4>Cross-platform Access</h4>
							<hr />
							<p>
								Access your data on web, mobile, and in augmented and virtual reality
							</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
