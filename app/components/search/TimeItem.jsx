import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './search.scss'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


class TimeItem extends Component{


  render() {
    const { post_title: title } = this.props.post

    return(

      <div>

        <Card className={styles.listContainer}>

          <CardTitle title={title} subtitle={this.props.post.info_byline.meta_value} />

        </Card>

      </div>

    )
  }
}

TimeItem.propTypes = {
  post: PropTypes.object,
}

export default TimeItem
