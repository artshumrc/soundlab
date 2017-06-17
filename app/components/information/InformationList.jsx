import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './information.scss'
import PostContent from '../posts/PostContent.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class InformationList extends Component{
  static propTypes = {
    post: React.PropTypes.object,
  }

  render() {
    const { post_content: content } = this.props.post

    return(

      <div>

        <Card >

          <CardTitle title={this.props.post.post_title} subtitle={this.props.post.info_byline.meta_value} />

          <CardText>
            <PostContent content={content}/>
          </CardText>

        </Card>

      </div>

    )
  }
}
