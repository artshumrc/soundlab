import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import CSSModules from 'react-css-modules';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';


import { getPostThumbnailBySize } from '../../../../lib/thumbnails';

import styles from './ResourceSingle.scss';



@CSSModules(styles, {allowMultiple: true})
class ResourceSingle extends Component {


  render() {
    const { resource, loading, error } = this.props;

    if (loading || !resource) {
			// TODO: add loading state
			return null;
		}

		let thumbnail;
		if (resource.thumbnail) {
	    thumbnail = getPostThumbnailBySize(resource.thumbnail, 'large');
		}

    const pageCoverImage = {
      backgroundImage: `url("${thumbnail || '/images/default_event.jpg'}")`,
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

		const byline = _.findWhere(resource.post_meta, { meta_key: 'byline' });
		const resourceDate = _.findWhere(resource.post_meta, { meta_key: 'date' });

    return (
			<div>
        <Row styleName="cover-section">
        </Row>
        <Row styleName="content-section">
          <Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
            <div styleName="cover-image" style={pageCoverImage} />
            <div>
              <h1 styleName="section-title">
								{resource.post_title}
							</h1>
							{byline &&
			          <h3 className={styles.postAuthor}>
									{byline.meta_value}
								</h3>
							}
              <div styleName="content" dangerouslySetInnerHTML={{__html: linkifyHtml(wpautop(resource.post_content))}} />
							{resourceDate &&
								<Row styleName="metaItem">
									<Col md={2}>
										<label>
											Date
										</label>
									</Col>
									<Col md={10}>
										<p>
											{moment(parseInt(resourceDate.meta_value, 10) * 1000).format('MMMM Do YYYY, h:mm a')}
										</p>
									</Col>
								</Row>
							}
						</div>
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
