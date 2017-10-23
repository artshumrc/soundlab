import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CSSModules from 'react-css-modules';
import _ from 'underscore';
import _s from 'underscore.string';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import PostContent from '../../../posts/components/PostContent';


import styles from './RecentSound.scss';

@CSSModules(styles, {allowMultiple: true})
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
      <Link to={`/waves/${name}`}>
	      <div styleName="recent-track">
          <div styleName="thumbnail-container">
            <div style={thumbnailListImage} />
          </div>

          <div styleName="recent-track-meta-container">
            <h4 styleName="recent-track-title">
							{title}
						</h4>
						{byline &&
	            <span styleName="recent-track-author">
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
