import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules'

import styles from './Cover.scss';
import FeaturedTrack from '../FeaturedTrack'

@CSSModules(styles, {allowMultiple: true})
class Cover extends React.Component {
	render() {
		return (
			<Grid>
		    <Row styleName="cover-section">
		      <Col md={6}>
		        <div styleName="site-tag-container">
		          <div styleName="tag-container">
		            <span styleName="site-tag">We hear you</span>
		          </div>
		          <div styleName="subtitle-container">
		            <span styleName="site-tag-subtitle">The Sound Lab at Harvard University</span>
		          </div>
		        </div>
		      </Col>
		      <Col md={6}>
		        <FeaturedTrack />
		      </Col>
		    </Row>
			</Grid>
		);
	}
}

export default Cover;
