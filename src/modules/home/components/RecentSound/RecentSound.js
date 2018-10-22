import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import _ from 'underscore';
import _s from 'underscore.string';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import PostContent from '../../../posts/components/PostContent';


import './RecentSound.css';

class RecentSound extends Component{
	render() {
		const {
			post_content: content,
			post_title: title,
			post_name: name,
			thumbnail
		} = this.props.post;

		const thumbnailListImage = {
			width: '100%',
			height: '300px',
			objectFit: 'cover',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		if (thumbnail) {
			thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(thumbnail, 'medium_large')}")`;
		} else {
			thumbnailListImage.backgroundImage = 'url("/images/default_sound.png")';
		}

		const byline = _.findWhere(this.props.post.post_meta, { meta_key: 'byline' });

		return(
			<Link to={`/sounds/${name}`} className="recent-track-link">
				<div className="recent-track">
					<div className="thumbnail-container">
						<div style={thumbnailListImage} />
					</div>

					<div className="recent-track-meta-container">
						<h4 className="recent-track-title">
							{title}
						</h4>
						{byline &&
						<span className="recent-track-author">
							{_s.prune(byline.meta_value, 60)}
						</span>
						}
					</div>
				</div>
			</Link>
		);
	}
}

export default RecentSound;
