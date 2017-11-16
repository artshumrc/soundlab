import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import CSSModules from 'react-css-modules';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';

import styles from './EventSingle.scss';



@CSSModules(styles, {allowMultiple: true})
class EventSingle extends Component {


  render() {
    const { event, loading, error } = this.props;

    if (loading || !event) {
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

		if (event.thumbnail) {
      coverImage.backgroundImage = `url("${getPostThumbnailBySize(event.thumbnail, 'large')}")`;
		}

		const byline = _.findWhere(event.post_meta, { meta_key: 'byline' });
		const eventStart = _.findWhere(event.post_meta, { meta_key: 'event_start' });
		const eventEnd = _.findWhere(event.post_meta, { meta_key: 'event_end' });
		const dateDescription = _.findWhere(event.post_meta, { meta_key: 'date_description' });
		const location = _.findWhere(event.post_meta, { meta_key: 'location' });

    return (
			<div>
        <Row styleName="cover-section">
        </Row>
        <Row styleName="content-section">
          <Col mdOffset={1} lgOffset={2} sm={12} md={10} lg={8}>
            <div styleName="cover-image" style={coverImage}></div>
            <div>
              <h1 styleName="section-title">
								{event.post_title}
							</h1>
							{byline &&
			          <h3 className={styles.postAuthor}>
									{byline.meta_value}
								</h3>
							}
              <div styleName="content" dangerouslySetInnerHTML={{__html: linkifyHtml(wpautop(event.post_content)) }} />
							{eventStart &&
								<Row styleName="metaItem">
									<Col md={2}>
										<label>
											Start
										</label>
									</Col>
									<Col md={10}>
										<p>
											{moment(parseInt(eventStart.meta_value, 10) * 1000).format('MMMM Do YYYY, h:mm a')}
										</p>
									</Col>
								</Row>
							}
							{eventEnd &&
								<Row styleName="metaItem">
									<Col md={2}>
										<label>
											End
										</label>
									</Col>
									<Col md={10}>
										<p>
											{moment(parseInt(eventEnd.meta_value, 10) * 1000).format('MMMM Do YYYY, h:mm a')}
										</p>
									</Col>
								</Row>
							}
							{location &&
								<Row styleName="metaItem">
									<Col md={2}>
										<label>
											Location
										</label>
									</Col>
									<Col md={10}>
										<p>
											{location.meta_value}
										</p>
									</Col>
								</Row>
							}
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

EventSingle.propTypes = {
  data: PropTypes.object
}

export default EventSingle;
