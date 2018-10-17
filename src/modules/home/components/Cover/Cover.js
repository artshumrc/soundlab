import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import './Cover.css';
import FeaturedTrackContainer from '../../containers/FeaturedTrackContainer';

class Cover extends React.Component {
	render() {
		return (
			<Clearfix>
				<div styleName="cover">
					<Grid>
						<Row styleName="coverRow">
							<Col md={6} sm={12}>
								<div styleName="coverText">
									<h1 styleName="siteTag">We hear you</h1>
									<h2 styleName="siteTagSubtitle">The Sound Lab at Harvard University</h2>
								</div>
							</Col>
							<Col styleName="featuredTrackColumn" md={6} sm={12}>
								<FeaturedTrackContainer />
							</Col>
						</Row>
					</Grid>
				</div>
			</Clearfix>
		);
	}
}

export default Cover;
