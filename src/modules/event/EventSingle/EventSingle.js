import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';


import { getPostThumbnailBySize } from '../../../lib/thumbnails';

import './EventSingle.css';



class EventSingle extends Component {




  render() {
    const {
      event, loading, error

    } = this.props;

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
    const startDate = _.findWhere(event.post_meta, { meta_key: 'start_date' });
    const startTime = _.findWhere(event.post_meta, { meta_key: 'start_time' });
    const endDate = _.findWhere(event.post_meta, { meta_key: 'end_date' });
    const endTime = _.findWhere(event.post_meta, { meta_key: 'end_time' });
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

              <div styleName="content" dangerouslySetInnerHTML={{__html: linkifyHtml(wpautop(event.post_content)) }} />

							{location &&
								<div styleName="metaItem">
									<label>
										Location
									</label>
									<p>
										{location.meta_value}
									</p>
								</div>
							}

              {startDate &&
                <div styleName="metaItem">
                  <label>
                    Date
                  </label>

                  <p>
                    Starts: {moment(startDate.meta_value).format('MMMM Do YYYY')}&nbsp;at&nbsp;
                    { startTime ?
                      startTime.meta_value : ''}
                  </p>
                  <p>
                    Ends: {endDate.meta_value === startDate.meta_value ? endTime.meta_value : moment(endDate.meta_value).format('MMMM Do YYYY') + ' at ' + endTime.meta_value }

                  </p>
                </div>
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
