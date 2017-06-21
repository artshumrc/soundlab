import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './search.scss'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


class BeingItem extends Component{


  render() {
    const { post_title: title } = this.props.post

    return(

      <div>

        <Card className={styles.listContainer}>

          <CardTitle title={title} subtitle={this.props.post.byline.meta_value} />
          <CardText>
            <PostContent content={this.props.post.post_content}/>
          </CardText>
        </Card>

      </div>

    )
  }
}

BeingItem.propTypes = {
  post: PropTypes.object,
}

export default BeingItem
