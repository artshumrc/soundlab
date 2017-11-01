import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'
import wpautop from 'wpautop';

import styles from './Page.scss'

@CSSModules(styles, {allowMultiple: true})
export default class About extends Component {

	renderPostContent() {
		const { page } = this.props;

		return { __html: wpautop(page.post_content) };
	}

  render() {
		const { page } = this.props;

		if (!page) {
			// TODO add loading
			return null;
		}

    const pageCoverImage = {
      backgroundImage: `url("/images/default_event.jpg")`,
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    const teamMemberImage = {
      backgroundImage: `url("/images/default_sound.jpg")`,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };


    return (
      <div>
        <Row styleName="page-cover-section">
        </Row>
        <Row styleName="page-content-section">
          <Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
            <div styleName="page-cover-image" style={pageCoverImage} />
            <div>
              <h1 styleName="page-section-title">
								{page.post_title}
							</h1>
              <div styleName="page-text" dangerouslySetInnerHTML={this.renderPostContent()} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
