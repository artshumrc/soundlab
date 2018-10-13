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
					<h3 className="readyToStartCallToAction">
						Get in touch, or start your archive.
					</h3>
				</Col>
				<Col md={5} className="startButtons">
					<Button
						to="/create"
						dark
					>
						Start your archive
					</Button>
					<a
						className="contactButton"
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
