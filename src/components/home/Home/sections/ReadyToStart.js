import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Button from '../../../common/buttons/Button';
import Util from '../../../../lib/util';

import './ReadyToStart.css';


const ReadyToStart = props => (
	<section className="readyToStart">
		<div className="readyToStartSplash" />
		<Grid>
			<Row>
				<Col md={8}>
					<h2 className="readyToStartQuestion">
						Ready to get started?
					</h2>
					<h3 className="readyToStartCallToAction">
						Get in touch, or start your archive.
					</h3>
				</Col>
				<Col md={4}>
					<Button
						href="#getStarted"
						dark
					>
						Start your archive
					</Button>
					<Button
						href="mailto:contact@orphe.us"
						transparentLight
						outline
					>
						Contact Us
					</Button>
				</Col>
			</Row>
		</Grid>
	</section>
);


export default ReadyToStart;
