import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import CSSModules from 'react-css-modules'

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
      backgroundImage: `url("${thumbnail}")`,
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

    return(
      <Link to="/">
	      <div styleName="recent-track">
          <div styleName="thumbnail-container">
            <div style={thumbnailListImage}></div>
          </div>

          <div styleName="recent-track-meta-container">
            <h4 styleName="recent-track-title">
							{title}
						</h4>
            <span styleName="recent-track-author">
							{this.props.post.byline.meta_value}
						</span>
          </div>
	      </div>
      </Link>
    );
  }
}

export default RecentSound;
