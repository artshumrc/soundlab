import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from './Cover.scss';
import FeaturedTrack from '../FeaturedTrack';

@CSSModules(styles, {allowMultiple: true})
class Cover extends React.Component {
	render() {
		return (
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
			        <FeaturedTrack />
			      </Col>
			    </Row>
				</Grid>
			</div>
		);
	}
}

export default Cover;
