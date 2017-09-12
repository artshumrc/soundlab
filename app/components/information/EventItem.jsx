import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
//import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
//import styles from '../posts/post_excerpt.scss'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import styles from './information.scss'


@CSSModules(styles, {allowMultiple: true})

class EventItem extends Component{

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

    return(

      <div styleName="event-container">
        <div styleName="event-section-wrapper date-wrapper">
          <div styleName="date-container month-container">
            <span styleName="month">{this.props.post.event_month.meta_value}</span>
          </div>
          <div styleName="date-container">
            <span styleName="date">{this.props.post.event_date.meta_value}</span>
          </div>

        </div>
        <div styleName="event-section-wrapper event-meta-wrapper">
          <div>
            <span styleName="event-name">{title}</span>
          </div>
          <div>
            <span styleName="event-time">{this.props.post.event_start_time.meta_value} - {this.props.post.event_end_time.meta_value}</span>
          </div>
        </div>

      </div>

    )
  }
}

EventItem.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.object,
  post: PropTypes.object,
}

export default EventItem
