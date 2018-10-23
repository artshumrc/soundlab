import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';

import './Cover.css';
import FeaturedTrackContainer from '../../containers/FeaturedTrackContainer';

class Cover extends React.Component {
	render() {
		return (
			<Clearfix>
				<div className="cover">
					<div>
						<Row className="coverRow">
							<Col md={6} sm={12}>
								<div className="coverText">
									<h1 className="siteTag">We hear you</h1>
									<h2 className="siteTagSubtitle">The Sound Lab at Harvard University</h2>
								</div>
							</Col>
							<Col className="featuredTrackColumn" md={6} sm={12}>
								<FeaturedTrackContainer />
							</Col>
						</Row>
					</div>
				</div>
			</Clearfix>
		);
	}
}

export default Cover;
