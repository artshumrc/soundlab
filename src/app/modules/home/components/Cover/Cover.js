import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from './Cover.scss';
import FeaturedTrackContainer from '../../containers/FeaturedTrackContainer';

@CSSModules(styles, {allowMultiple: true})
class Cover extends React.Component {
	render() {
		return (
			<Clearfix>
				<div styleName="cover">
					<Grid>
				    <Row>
				      <Col md={6}>
				        <div styleName="coverText">
			            <h1 styleName="siteTag">We hear you</h1>
			            <h2 styleName="siteTagSubtitle">The Sound Lab at Harvard University</h2>
				        </div>
				      </Col>
				      <Col md={6}>
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
