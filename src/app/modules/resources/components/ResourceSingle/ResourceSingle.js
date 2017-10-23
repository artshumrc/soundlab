import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import CSSModules from 'react-css-modules';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import _ from 'underscore';

import styles from './ResourceSingle.scss';



@CSSModules(styles, {allowMultiple: true})
class ResourceSingle extends Component {


  render() {
    const { resource, loading, error } = this.props;

    if (loading || !resource) {
			// TODO: add loading state
			return null;
		}


    const coverImage = {
      backgroundImage: `url("/images/default_event.jpg")`,
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

		if (resource.thumbnail) {
      coverImage.backgroundImage = `url("${getPostThumbnailBySize(resource.thumbnail, 'large')}")`;
		}

		const byline = _.findWhere(resource.post_meta, { meta_key: 'byline' });

    return (
			<div>
        <Row styleName="cover-section">
        </Row>
        <Row styleName="content-section">
          <Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
            <div styleName="cover-image" style={coverImage}></div>
            <div>
              <h1 styleName="section-title">
								{resource.post_title}
							</h1>
							{byline &&
			          <h3 className={styles.postAuthor}>
									{byline.meta_value}
								</h3>
							}
              <p styleName="text" dangerouslySetInnerHTML={{__html: resource.post_content}}>
							</p>

						</div>
						{/*
	          <ReactDisqusThread
	            shortname="soundlab-1"
	            identifier="soundlab-information"
	            title="Information Thread"
	            onNewComment={this.handleNewComment}
	          />
						*/}
					</Col>
				</Row>
			</div>
    );
  }
}

ResourceSingle.propTypes = {
  data: PropTypes.object
}

export default ResourceSingle;
