import React from 'react';
// import FontAwesome from 'react-fontawesome';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import './PricingSection.css';

export default class PricingSection extends React.Component {
	render() {
		return (
			<section id="pricing" className="text-center">
				<h3>Awesome features</h3>
				<h2>We offer best digital experience</h2>
				<Grid>
					<Row>
						<Col lg={4}>
							<Panel header="Standard" bsStyle="primary" className="simple">
								<span className="price">Free</span>
								<hr />
								<ul />
								<Button bsStyle="primary" />
							</Panel>
						</Col>
						<Col lg={4}>
							<Panel header="Standard" bsStyle="primary" className="ultimate">
								<span className="price">Contact Us</span>
								<div>University Data Services</div>
								<hr />
								<ul />
								<Button bsStyle="primary">Get started now</Button>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
