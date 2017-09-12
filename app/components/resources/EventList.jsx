import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactDOM from 'react-dom'
import EventItem from './EventItem'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'
//import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
//import styles from '../posts/post_excerpt.scss'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import styles from './resources.scss'


@CSSModules(styles, {allowMultiple: true})

class EventList extends Component{

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const { index } = this.props
  }

  handleClick(e) {
    e.preventDefault()
    const target = e.currentTarget.href
    browserHistory.push(target)
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      posts: React.PropTypes.array,
    }).isRequired,
  }

  render() {

    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }
    console.log(this.props.data.posts)
    if (this.props.data.posts) {

    return(
        <div>
        {this.props.data.posts.map((post) =>
          <EventItem key={post.id} post={post} />
        )}
        </div>


      )
    }
  }
}


const EventQuery = gql`
  query EventQuery {
    posts(post_type: "event") {
      id,
      post_title
      post_name
      post_content
      event_month {
        meta_value
      }
      event_date {
        meta_value
      }
      event_start_time {
        meta_value
      }
      event_end_time {
        meta_value
      }


    }
  }
`

const EventListWithData = graphql(EventQuery)(EventList)

export default EventListWithData
