import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import Button from '../../../../../../components/common/buttons/Button';
import Util from '../../../../../../lib/util';

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
					<Button
						transparentLight
						outline
						href="mailto:contact@orphe.us"
					>
						Contact Us
					</Button>
				</Col>
			</Row>
		</Grid>
	</section>
);


export default ReadyToStart;
