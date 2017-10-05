import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import CSSModules from 'react-css-modules'

import PostContent from '../../../posts/components/PostContent'
import styles from './RecentUploadItem.scss'

@CSSModules(styles, {allowMultiple: true})
class RecentUploadItem extends Component{

  componentDidMount() {
    const { index } = this.props
  }

  handleClick(e) {
    e.preventDefault()
    const target = e.currentTarget.href
    browserHistory.push(target)
  }


  render() {
    const { post_content: content, post_title: title, post_name: name, thumbnail: thumbnail } = this.props.post

    const thumbnailListImage = {
          backgroundImage: `url("${thumbnail}")`,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }

    return(

      <div styleName="recent-track">
        <Link to={"uploads/" + encodeURIComponent(name)} onClick={this.handleClick.bind(this)}>
          <div styleName="thumbnail-container">
            <div style={thumbnailListImage}></div>
          </div>

          <div styleName="recent-track-meta-container">
            <div>
              <span styleName="recent-track-title">{title}</span>
            </div>
            <div>
              <span styleName="recent-track-author">{this.props.post.byline.meta_value}</span>
            </div>
          </div>
        </Link>
      </div>

    )
  }
}

RecentUploadItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default RecentUploadItem
