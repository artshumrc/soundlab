import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import _ from 'underscore';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import './Learn.css'

class Learn extends React.Component {
  render() {
		const { event } = this.props;

		if (!event) {
			return null;
		}

    const thumbnailListImage = {
        width: '100%',
        height: '800px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
				backgroundImage: 'url("/images/default_event.jpg")',
    };


		if (event.thumbnail) {
      thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(event.thumbnail, 'medium_large')}")`;
		}

		const byline = _.findWhere(event.post_meta, { meta_key: 'byline' });
		const dateDescription = _.findWhere(event.post_meta, { meta_key: 'date_description' });
		const excerpt = _.findWhere(event.post_meta, { meta_key: 'excerpt' });


    return (
			<section styleName="learn">
				<Grid>
		      <Row>
		        <Col>
							<div styleName="learn-upper">
								<Link to={`/events/${event.post_name}`}>
				          <div
										styleName="learn-background"
										style={thumbnailListImage}
									/>
								</Link>
			          <div styleName="learn-inlay">
									<Link to={`/events/${event.post_name}`}>
				            <h3 styleName="learn-title">
											{event.post_title}
										</h3>
									</Link>
									{dateDescription &&
				            <span styleName="learn-date">
											{dateDescription.meta_value}
										</span>
									}
									{excerpt &&
				            <p styleName="learn-description">
											{excerpt.meta_value}
										</p>
									}
									<Link to={`/events/${event.post_name}`}>
										<div styleName="learn-more">
											<i className="mdi mdi-chevron-right" />
											<span>
												Learn more
											</span>
										</div>
									</Link>
			          </div>
							</div>
		        </Col>
		      </Row>
		      <Row>
		        <Col md={6}>
							<div styleName="learn-lower">
			          <h3 styleName="site-tag">
									Learn through creation.
								</h3>
			          <p styleName="site-tag-subtitle">
									We host weekly workshops covering topics ranging from beginner microphone use to advanced full studio sessions. All students are welcome!
								</p>
							</div>
							<Link to="/events">
								<div styleName="learn-more">
									<i className="mdi mdi-chevron-right" />
									<span>
										View the full calendar of events
									</span>
								</div>
							</Link>
		        </Col>
		        <Col md={6}>
						</Col>
		      </Row>
				</Grid>
			</section>
    );
  }
}

export default Learn;
