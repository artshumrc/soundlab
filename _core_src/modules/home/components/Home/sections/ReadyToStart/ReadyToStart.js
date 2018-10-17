import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from '../../../../../../components/common/buttons/Button';

import './ReadyToStart.css';


const ReadyToStart = props => (
	<section className="readyToStart">
		<div className="readyToStartSplash" />
		<Grid>
			<Row>
				<Col md={7}>
					<h2 className="readyToStartQuestion">
						Ready to get started?
					</h2>
					<h5 className="readyToStartCallToAction">
						Start your archive, or get in touch.
					</h5>
				</Col>
				<Col md={5} className="startButtons">
					<Button
						to="/create"
						dark
					>
						Start your archive
					</Button>
					<a
						className="button contactButton"
						href="mailto:contact@orphe.us"
					>
						Email Us
					</a>
				</Col>
			</Row>
		</Grid>
	</section>
);


export default ReadyToStart;
