import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import { Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';


import { getPostThumbnailBySize } from '../../../../lib/thumbnails';

import './ResourceSingle.css';



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

      //remove cover section and cover section image for release

			<div>
				{/* <Row className="cover-section">
      </Row> */}
				<Row className="content-section">
					<Col>
						{/*<div className="cover-image" style={pageCoverImage} /> */}
						<div>
							<h1 className="section-title">
								{resource.post_title}
							</h1>
							{byline &&
							<h3 className="postAuthor">
								{byline.meta_value}
							</h3>
							}
							<div className="content" dangerouslySetInnerHTML={{__html: linkifyHtml(wpautop(resource.post_content))}} />
							{resourceDate &&
							<Row className="metaItem">
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
