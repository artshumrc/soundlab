import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './audioUpload.scss'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
import PostContent from '../../../components/posts/PostContent.js'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

@CSSModules(styles, {allowMultiple: true})

class AudioUploadItem extends Component{



  componentDidMount() {
    const { index } = this.props
  }

  handleClick(e) {
    e.preventDefault()
    const target = e.currentTarget.href
    browserHistory.push(target)
  }


  render() {
    const { post_content: content, post_title: title, post_name: name } = this.props.post

    const postCardTitle = {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '22px'
    }

    const postCardSubtitle = {
      fontSize: '14px'
    }

    const postTrack = {
      display: 'inline-block',
      padding: '16px 0px 16px 48px',
      width: '100px'

    }

    const postCardTitleSection = {
      display: 'inline-block',
      verticalAlign: 'super'
    }



    return(
      <div>
        <Col styleName="wave-audio-posts" xs={12} sm={12} md={12} lg={12}>
        <Card styleName="list-container">
          <Link to={"uploads/" + encodeURIComponent(name)} onClick={this.handleClick.bind(this)}>
          <div styleName="track-number-container">
            { this.props.track === 0 ?
              <span styleName="track-number">1</span>
            :
              <span styleName="track-number">{this.props.track + 1}</span>
            }
          </div>
          <CardHeader
             avatar="images/maple_leaf.jpg"
             style={postTrack}
          />
          <CardTitle
            title={title}
            titleStyle={postCardTitle}
            subtitle={this.props.post.byline.meta_value}
            subtitleStyle={postCardSubtitle}
            style={postCardTitleSection} />
            <div styleName="track-duration-container">
              <span styleName="track-duration">3:37</span>
            </div>

          </Link>

        </Card>
        </Col>

      </div>

    )
  }
}

AudioUploadItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default AudioUploadItem
