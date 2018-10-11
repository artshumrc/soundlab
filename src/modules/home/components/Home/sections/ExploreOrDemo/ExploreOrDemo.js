import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './ExploreOrDemo.css';

const ExploreOrDemo = props => (
	<section className="exploreOrDemo">
		<Grid>
			<Row>
				<Col md={6}>
					<div className="exploreOrDemoButton">
						<Row>
							<Col sm={2}>
								<div className="exploreOrDemoIcon">
									<i className="mdi mdi-view-dashboard" />
								</div>
							</Col>
							<Col sm={10}>
								<div className="exploreOrDemoText">
									<h3>Explore collections built with Orpheus</h3>
									<p>
										Browse example collections to see how institutions are using
										Orpheus to manage their data
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
				<Col md={6}>
					<div className="exploreOrDemoButton">
						<Row>
							<Col sm={2}>
								<div className="exploreOrDemoIcon">
									<i className="mdi mdi-pillar" />
								</div>
							</Col>
							<Col sm={10}>
								<div className="exploreOrDemoText">
									<h3>Try the demo</h3>
									<p>
										See how Orpheus works by uploading and tagging items in our
										demo dashboard
									</p>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Grid>
	</section>
);

export default ExploreOrDemo;
