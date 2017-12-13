import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';


import { getPostThumbnailBySize } from '../../../../lib/thumbnails';

import styles from './Page.scss'

@CSSModules(styles, {allowMultiple: true})
export default class About extends Component {

	renderPostContent() {
		const { page } = this.props;

		return { __html: linkifyHtml(wpautop(page.post_content)) };
	}

  render() {
		const { page } = this.props;

		if (!page) {
			// TODO add loading
			return null;
		}

		let thumbnail;
		if (page.thumbnail) {
	    thumbnail = getPostThumbnailBySize(page.thumbnail, 'large');
		}

    const pageCoverImage = {
      backgroundImage: `url("${thumbnail || '/images/default_event.jpg'}")`,
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
              <div styleName="content" dangerouslySetInnerHTML={this.renderPostContent()} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
